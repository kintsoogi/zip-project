import React from "react";
import localforage from "localforage";

import "./App.css";
import ZipFileInput from "./components/ZipFileInput";
import useZipToUsfmData from "./hooks/useZipToUsfmData";

const App = () => {
  const zipStore = localforage.createInstance({
    driver: [localforage.INDEXEDDB],
    name: "zip-store",
  });

  const getZipFromIdbStore = async (filename) => {
    try {
      return await zipStore.getItem(filename);
    } catch (error) {
      console.log("Error while retrieving zip file from IndexedDB...", error);
    }
  };

  const handleZipLoad = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    await zipStore.setItem(file.name, arrayBuffer); // For now instead of project name, we will just use file name to store the file.
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
      <ZipFileInput onChange={onChange} />
      <button onClick={onSubmit}></button>
    </div>
  );
};

export default App;
