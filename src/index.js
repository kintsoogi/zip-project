import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { ProjectsProvider } from "./context/projects";
import { CreateZipProject } from "./components/CreateZipProject/CreateZipProject";
import { ProjectList } from "./components/ProjectList/ProjectList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </React.StrictMode>
);

export { CreateZipProject, ProjectList };
