import React from "react";

const ProjectItem = ({ project }) => {
  // TODO: Why are we being rendered EIGHT TIMES???
  console.log(project.data);

  return (
    <tr data-cy="project-item">
      <td>{project.name}</td>
      <td>{project.data.length}</td>
    </tr>
  );
};

export default ProjectItem;
