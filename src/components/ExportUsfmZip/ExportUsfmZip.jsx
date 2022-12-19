import React from "react";
import PropTypes from "prop-types";

import { usfmDataToArrayBuffer } from "../../utils/zipUsfmHelpers";
import useProjectsContext from "../../hooks/use-projects-context";

const ExportUsfmZip = () => {
  const { selectedProject } = useProjectsContext();

  // Function to handle click on button... do something with selected project
  const handleClick = async () => {
    console.log(`exporting ${selectedProject.name} usfm data to zip file...`);
    console.log(await usfmDataToArrayBuffer(selectedProject.data));
  };

  return (
    <div>
      <button onClick={handleClick}>Save</button>
    </div>
  );
};

ExportUsfmZip.propTypes = {
  /** Parameters: usfmData | Called when zip file has loaded to act upon usfm data */
  onCreate: PropTypes.func,
  /**  Passed to determine whether or not usfm files within the zip should be validated*/
  shouldValidate: PropTypes.bool,
};

export default ExportUsfmZip;
