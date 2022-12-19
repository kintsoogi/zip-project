import React from "react";

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

export default ZipFileInput;
