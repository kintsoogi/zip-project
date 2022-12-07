import React, { useState } from "react";

import ZipFileInput from "./components/ZipFileInput";
import useZipToUsfmData from "./hooks/useZipToUsfmData";
import useLocalForage from "./hooks/useLocalForage";

const App = () => {
  const [projectName, setProjectName] = useState("");
  const { store, getFromStore, setInStore } = useLocalForage("zip-store");

  // On app load, check zip store for any existing projects...
  // getAllFromStore

  // If any projects exist and user wants to open, get info from store
  // getFromStore(project)

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
    <div className="App">
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

export default App;
