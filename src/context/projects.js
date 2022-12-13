import React, { createContext, useState } from "react";

import {
  arrayBufferToUsfmArray,
  // usfmArrayToArrayBuffer,
} from "../utils/zipUsfmHelpers";
import useLocalForage from "../hooks/use-local-forage";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const { getAllFromStore, setInStore, deleteFromStore } = useLocalForage();

  const projectExists = (projectName) => {
    return projects.some((project) => project.name === projectName);
  };

  const fetchProjects = async () => {
    const response = await getAllFromStore();
    setProjects(response);
  };

  const getProject = (projectName) => {
    const foundProject = projects.find(
      (project) => project.name === projectName
    );
    return { ...foundProject };
  };

  const addProject = async (projectName, usfmArrayBuffer) => {
    if (projectExists(projectName)) {
      // complain to the user
      return false;
    }

    const newProject = {
      name: projectName,
      data: await arrayBufferToUsfmArray(usfmArrayBuffer),
    };

    await setInStore(projectName, usfmArrayBuffer);
    setProjects([...projects, newProject]);
    return true;
  };

  const updateProject = async (projectName, usfmData) => {
    if (!projectExists(projectName)) {
      // complain to the user
      return false;
    }

    const updatedProjects = projects.map((project) => {
      if (project.name === projectName) {
        return { ...project, data: usfmData };
      }
    });
    const usfmArrayBuffer = [];
    // const usfmArrayBuffer = usfmArrayToArrayBuffer(usfmData);

    await setInStore(projectName, usfmArrayBuffer);
    setProjects(updatedProjects);
    return true;
  };

  const deleteProject = async (projectName) => {
    if (!projectExists(projectName)) {
      // complain to the user
      return false;
    }

    await deleteFromStore(projectName);
    setProjects(projects.filter((project) => project.name !== projectName));
    return true;
  };

  const context = {
    projects,
    fetchProjects,
    getProject,
    addProject,
    updateProject,
    deleteProject,
  };

  return (
    <ProjectsContext.Provider value={context}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider };
export default ProjectsContext;
