import React, { useEffect } from "react";

import CreateZipProject from "./components/CreateZipProject/CreateZipProject";
import ProjectList from "./components/ProjectList/ProjectList";
import ExportUsfmZip from "./components/ExportUsfmZip/ExportUsfmZip";
import useProjectsContext from "./hooks/use-projects-context";

const App = () => {
  const { fetchProjects, selectedProject } = useProjectsContext();

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
      {selectedProject ? (
        <div>
          <h4>Selected Project:</h4>
          <p>{selectedProject.name}</p>
          <ExportUsfmZip />
        </div>
      ) : null}
    </div>
  );
};

export default App;
