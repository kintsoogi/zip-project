import React, { useState } from "react";
import PropTypes from "prop-types";

import useZipUsfmFileInput from "../../hooks/use-zip-usfm-file-input";
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
  } = useZipUsfmFileInput(handleZipLoad, shouldValidate);

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
        <input type="file" accept=".zip" onChange={onChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

CreateZipProject.propTypes = {
  /** Parameters: usfmData | Called when zip file has loaded to act upon usfm data */
  onCreate: PropTypes.func,
  /**  Passed to determine whether or not usfm files within the zip should be validated*/
  shouldValidate: PropTypes.bool,
};

export default CreateZipProject;
