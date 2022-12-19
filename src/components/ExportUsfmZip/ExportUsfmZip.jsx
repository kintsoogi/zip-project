import React from "react";
import { saveAs } from "file-saver";
import PropTypes from "prop-types";

import { usfmDataToFileData } from "../../utils/zipUsfmHelpers";

const ExportUsfmZip = ({ zipFilename, usfmData }) => {
  const handleClick = async () => {
    const { blob } = await usfmDataToFileData(usfmData);
    saveAs(blob, `${zipFilename}.zip`);
  };

  return (
    <div>
      <button onClick={handleClick}>Save</button>
    </div>
  );
};

ExportUsfmZip.propTypes = {
  /** Filename to write the zip file to */
  zipFilename: PropTypes.string,
  /** Array of USFM data objects to be zipped */
  usfmData: PropTypes.array,
};

export default ExportUsfmZip;
