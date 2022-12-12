import React, { useState, useEffect } from "react";

import OpenZipProject from "./components/OpenZipProject";
import ProjectList from "./components/ProjectList";
import useProjectsContext from "./hooks/use-projects-context";

const App = () => {
  const { fetchProjects } = useProjectsContext();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="App">
      <OpenZipProject />
      <ProjectList />
    </div>
  );
};

export default App;
