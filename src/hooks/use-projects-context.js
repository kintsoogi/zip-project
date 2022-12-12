import { useContext } from "react";
import ProjectsContext from "../contexts/projects";

const useProjectsContext = () => {
  return useContext(ProjectsContext);
};

export default useProjectsContext;
