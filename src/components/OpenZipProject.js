import React, { useState } from "react";

import ZipFileInput from "./ZipFileInput";
import useZipToUsfmData from "../hooks/useZipToUsfmData";
import useLocalForage from "../hooks/useLocalForage";

const OpenZipProject = () => {
  const [projectName, setProjectName] = useState("");
  const { setInStore } = useLocalForage("zip-store");

  const handleZipLoad = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    await setInStore(projectName, arrayBuffer);
  };

  const {
    status,
    file,
    isLoading,
    usfmData,
    invalidFileType,
    uploadError,
    onChange,
    onSubmit,
  } = useZipToUsfmData(handleZipLoad);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (uploadError) {
    return (
      <div>
        <h1>An Error occured:</h1>
        <p>{uploadError.message}</p>
      </div>
    );
  }

  if (invalidFileType) {
    return (
      <div>
        <p>{`Invalid file upload: ${invalidFileType}`}</p>
      </div>
    );
  }

  if (status === "UPLOAD_SUCCESS") {
    console.log(usfmData);
    return (
      <div>
        <p>wohoo it worked!</p>
      </div>
    );
  }

  return (
    <div className="open-zip-project">
      <h1>This is my file input</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Project Name"
          name="projectName"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />
        <ZipFileInput onChange={onChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default OpenZipProject;
