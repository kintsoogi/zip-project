import React, { useContext } from "react";

import ProjectsContext from "../contexts/projects";

const ProjectList = () => {
  const { projects } = useContext(ProjectsContext);
  console.log(projects);

  return <div>ProjectList</div>;
};

export default ProjectList;
