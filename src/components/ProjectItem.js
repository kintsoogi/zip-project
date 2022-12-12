import React from "react";

const ProjectItem = ({ project }) => {
  console.log(project.data);

  return (
    <div data-cy="project-item">
      <h3>{project.name}</h3>
    </div>
  );
};

export default ProjectItem;
