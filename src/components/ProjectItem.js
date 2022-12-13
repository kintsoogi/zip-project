import React from "react";

const ProjectItem = ({ project }) => {
  console.log(project);

  return (
    <tr data-cy="project-item">
      <td>{project.name}</td>
      <td>{project.data.length}</td>
    </tr>
  );
};

export default ProjectItem;
