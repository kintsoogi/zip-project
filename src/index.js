import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProjectsProvider } from "./context/projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </React.StrictMode>
);
