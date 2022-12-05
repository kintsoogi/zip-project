import React, { useState, useEffect } from "react";
import JSZip from "jszip";
import localforage from "localforage";
import grammar from "usfm-grammar";

import "./App.css";
import ZipFileInput from "./components/ZipFileInput";

const App = () => {
  const USFM_REGEX = /([a-zA-Z0-9\s_\\.\-\(\):])+(.usfm)$/i;

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

  const storeZipInIdbStore = async (filename, arrayBuffer) => {
    await zipStore.setItem(filename, arrayBuffer); // For now instead of project name, we will just use file name to store the file.

    const usfmTextArray = await arrayBufferToUsfmArray(arrayBuffer);
    // console.log(usfmTextArray);

    const usfmValidatedTexts = usfmTextArray.filter((usfmText) =>
      isValidUsfmFile(usfmText)
    );
    console.log(usfmValidatedTexts);

    if (usfmTextArray.length !== usfmValidatedTexts.length) {
      console.warn("Zip file contained usfm files that were not valid!");
    } else {
      console.log("No Zipped usfm files were corrupt!!!");
    }
  };

  const isValidUsfmFile = (usfmText) => {
    const usfmParser = new grammar.USFMParser(usfmText, grammar.LEVEL.RELAXED);
    return usfmParser.validate();
  };

  const arrayBufferToUsfmArray = async (zipArrayBuffer) => {
    try {
      // Create jszip and load data from array buffer
      const zip = await JSZip.loadAsync(zipArrayBuffer);

      const usfmPromises = zip
        .file(USFM_REGEX)
        // Transforms zip file objects to promises to get file data
        .map((zipObj) => zipObj.async("string"));
      return await Promise.all(usfmPromises);
    } catch (error) {
      console.log("Error while reading the zip array buffer...", error);
    }
  };

  return (
    <div className="App">
      <h1>This is my file input</h1>
      <ZipFileInput onLoad={storeZipInIdbStore} />
    </div>
  );
};

export default App;
