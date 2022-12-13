import React, { useEffect } from "react";

import CreateZipProject from "./components/CreateZipProject/CreateZipProject";
import ProjectList from "./components/ProjectList/ProjectList";
import useProjectsContext from "./hooks/use-projects-context";

const App = () => {
  const { fetchProjects } = useProjectsContext();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="App">
      <CreateZipProject />
      <ProjectList />
    </div>
  );
};

export default App;
