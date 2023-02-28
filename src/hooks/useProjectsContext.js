import { useContext } from "react";
import ProjectsContext from "../context/projects";

const useProjectsContext = () => {
  return useContext(ProjectsContext);
};

export default useProjectsContext;
