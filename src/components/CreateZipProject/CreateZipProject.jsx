import React, { useState } from "react";

import ZipFileInput from "./ZipFileInput";
import useZipToUsfmData from "../../hooks/use-zip-to-usfm-data";
import useProjectsContext from "../../hooks/use-projects-context";

const CreateZipProject = ({ onCreate, shouldValidate = true }) => {
  const [projectName, setProjectName] = useState("");
  const { addProject } = useProjectsContext();

  const handleZipLoad = async (usfmData, file) => {
    const arrayBuffer = await file.arrayBuffer();
    await addProject(projectName, arrayBuffer);
    onCreate(usfmData);
  };

  const {
    status,
    isLoading,
    invalidFileType,
    uploadError,
    onChange,
    onSubmit,
  } = useZipToUsfmData(handleZipLoad, shouldValidate);

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
    return (
      <div>
        <p>wohoo it worked!</p>
      </div>
    );
  }

  return (
    <div className="open-zip-project">
      <h1>Input zipped USFM files...</h1>
      <form onSubmit={onSubmit}>
        <input
          data-cy="zip-text-input"
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

export default CreateZipProject;