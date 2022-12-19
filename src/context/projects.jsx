import React, { createContext, useState } from "react";

import {
  arrayBufferToUsfmData,
  usfmDataToFileData,
} from "../utils/zipUsfmHelpers";
import useLocalForage from "../hooks/use-local-forage";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const { getAllFromStore, setInStore, deleteFromStore } = useLocalForage();

  const projectExists = (projectName) => {
    return projects.some((project) => project.name === projectName);
  };

  const fetchProjects = async () => {
    const storeData = await getAllFromStore();
    const projectPromises = storeData.map(async (data) => {
      return {
        id: data.id,
        name: data.key,
        data: await arrayBufferToUsfmData(data.value),
        // TODO: (maybe) detect language in data and store
        // language: detectLanguage(data.value)
      };
    });
    const _projects = await Promise.all(projectPromises);
    setProjects(_projects);
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
      id: projects.length,
      name: projectName,
      data: await arrayBufferToUsfmData(usfmArrayBuffer),
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
    const { usfmArrayBuffer } = usfmDataToFileData(usfmData);

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

  const selectProject = (project) => {
    console.log(project);
    setSelectedProject({ ...project });
  };

  const context = {
    projects,
    selectedProject,
    fetchProjects,
    getProject,
    addProject,
    updateProject,
    deleteProject,
    selectProject,
  };

  return (
    <ProjectsContext.Provider value={context}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider };
export default ProjectsContext;
