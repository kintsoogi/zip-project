import React from "react";
import PropTypes from "prop-types";

const ZipFileInput = ({ onLoad }) => {
  // We will implement this later
  const isValidZipFile = (file) => true;

  const handleChange = async (e) => {
    const file = e.target.files[0];
    // We will eventually need the functionality to make sure uploaded file is actually a zip file

    if (isValidZipFile(file)) {
      const zipArrayBuffer = await file.arrayBuffer();
      onLoad(file.name, zipArrayBuffer); // Do we want to catch this promise error?
    }
  };

  return <input type="file" accept=".zip" onChange={handleChange} />;
};

ZipFileInput.propTypes = {
  /** Parameters: filename, zipArrayBuffer | Called when zip file has loaded */
  onLoad: PropTypes.func,
};

export default ZipFileInput;
