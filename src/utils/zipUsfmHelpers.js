import grammar from "usfm-grammar";
import JSZip from "jszip";

const USFM_REGEX = /([a-zA-Z0-9\s_\\.\-\(\):])+(.usfm)$/i;

const isValidUsfmFile = (usfmText) => {
  const usfmParser = new grammar.USFMParser(usfmText, grammar.LEVEL.RELAXED);
  return usfmParser.validate();
};

export const validateUsfmArray = (usfmArray) => {
  const usfmValidatedArray = usfmArray.filter((usfmText) =>
    isValidUsfmFile(usfmText)
  );
  return usfmValidatedArray;
};

export const arrayBufferToUsfmArray = async (zipArrayBuffer) => {
  // Create jszip and load data from array buffer
  const zip = await JSZip.loadAsync(zipArrayBuffer);

  const usfmPromises = zip
    .file(USFM_REGEX)
    // Transforms zip file objects to promises to get file data
    .map((zipObj) => zipObj.async("string"));

  return await Promise.all(usfmPromises);
};
