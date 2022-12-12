import React, { useContext } from "react";

import ProjectsContext from "../contexts/projects";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const { projects } = useContext(ProjectsContext);

  const renderedProjectItems = projects.map((project) => (
    <ProjectItem key={project.name} project={project} />
  ));

  return (
    <div>
      <h2>Project List</h2>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Books</th>
          </tr>
        </thead>
        <tbody>{renderedProjectItems}</tbody>
      </table>
    </div>
  );
};

export default ProjectList;
