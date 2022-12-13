import React, { useEffect } from "react";

import CreateZipProject from "./components/CreateZipProject/CreateZipProject";
import ProjectList from "./components/ProjectList/ProjectList";
import useProjectsContext from "./hooks/use-projects-context";

const App = () => {
  const { fetchProjects } = useProjectsContext();

  const handleCreateZip = (usfmData) => {
    console.log(usfmData);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="App">
      <CreateZipProject onCreate={handleCreateZip} />
      <ProjectList />
    </div>
  );
};

export default App;
