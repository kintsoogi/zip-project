import React from "react";
import PropTypes from "prop-types";

const ZipFileInput = ({ onChange }) => {
  return (
    <input
      data-cy="zip-file-input"
      type="file"
      accept=".zip"
      onChange={onChange}
    />
  );
};

ZipFileInput.propTypes = {
  /** Parameters: filename, zipArrayBuffer | Called when zip file has loaded */
  onLoad: PropTypes.func,
  /**  Boolean representing whether or not usfm files within the zip should be validated*/
  shouldValidate: PropTypes.bool,
};

export default ZipFileInput;
