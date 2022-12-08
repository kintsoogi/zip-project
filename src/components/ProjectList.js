import React, { useState, useEffect } from "react";

import useLocalForage from "../hooks/useLocalForage";

const ProjectList = () => {
  const [projectData, setProjectData] = useState([]);
  const { storeData } = useLocalForage("zip-store");

  console.log(storeData);

  return <div>ProjectList</div>;
};

export default ProjectList;
