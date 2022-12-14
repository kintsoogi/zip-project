import grammar from "usfm-grammar";
import JSZip from "jszip";

const USFM_REGEX = /([a-zA-Z0-9\s_\\.\-\(\):])+(.usfm)$/i;

const isValidUsfmFile = (usfmText) => {
  const usfmParser = new grammar.USFMParser(usfmText, grammar.LEVEL.RELAXED);
  return usfmParser.validate();
};

export const validateUsfmData = (usfmData) => {
  const usfmValidatedData = usfmData.filter((usfmObj) =>
    isValidUsfmFile(usfmObj.usfmText)
  );
  return usfmValidatedData;
};

const getUsfmTexts = async (zip) => {
  const usfmPromises = zip
    .file(USFM_REGEX)
    // Transforms zip file objects to promises to get file data
    .map((zipObj) => zipObj.async("string"));

  return await Promise.all(usfmPromises);
};

export const arrayBufferToUsfmData = async (zipArrayBuffer) => {
  // Create jszip and load data from array buffer
  const zip = await JSZip.loadAsync(zipArrayBuffer);

  const usfmTexts = await getUsfmTexts(zip);

  const usfmDataArray = zip.file(USFM_REGEX).map((zipObj, fileIndex) => {
    return {
      filename: zipObj.name,
      usfmText: usfmTexts[fileIndex],
      // TODO: Generate bookId from usfmText
      // bookId: getBookId(usfmTexts[fileIndex]),
    };
  });

  return usfmDataArray;
};

// TODO: Create functionality to turn usfm data into array buffer
// export const usfmArrayToArrayBuffer = () => {};
