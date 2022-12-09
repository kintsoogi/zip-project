import { useEffect, useReducer } from "react";

import {
  arrayBufferToUsfmArray,
  validateUsfmArray,
} from "../utils/zipUsfmHelpers";

// Constants
const CANCEL_FILE_OPEN_ERROR =
  "Cannot read properties of undefined (reading 'type')";
const FILE_LOADED = "FILE_LOADED";
const INIT = "INIT";
const INVALID_FILE = "INVALID_FILE";
const UPLOAD_ERROR = "UPLOAD_ERROR";
const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";

const initialState = {
  status: "idle",
  file: null,
  isLoading: false,
  usfmData: [],
  invalidFileType: "",
  uploadError: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "upload":
      return { ...state, file: action.file, status: FILE_LOADED };
    case "submit":
      return { ...state, isLoading: true, status: INIT };
    case "file-uploaded":
      return {
        ...state,
        isLoading: false,
        usfmData: action.usfmData,
        status: UPLOAD_SUCCESS,
      };
    case "invalid-file":
      return {
        ...state,
        isLoading: false,
        invalidFileType: action.fileType,
        status: INVALID_FILE,
      };
    case "upload-error":
      return {
        ...state,
        isLoading: false,
        uploadError: action.error,
        status: UPLOAD_ERROR,
      };
    default:
      return state;
  }
};

const useZipToUsfmData = (
  handleZipLoad = (file) => console.log(file),
  shouldValidate = true
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.file) {
      dispatch({ type: "submit" });
    } else {
      window.alert("No zip file has been input!");
    }
  };

  const onChange = async (e) => {
    if (e.target.files[0]) {
      dispatch({ type: "upload", file: e.target.files[0] });
    }
  };

  // When user has submitted the file, proccess it, validate it, and call parameter function
  // to store it.
  useEffect(() => {
    const processFile = async () => {
      if (state.file && state.isLoading) {
        // TODO: We can check if file is valid zip file
        try {
          if (state.file.type.includes("zip")) {
            const arrayBuffer = await state.file.arrayBuffer();
            const usfmArray = await arrayBufferToUsfmArray(arrayBuffer);

            if (!usfmArray.length) {
              dispatch({
                type: "invalid-file",
                fileType: "Zip file with no usfm files was uploaded!",
              });
              return;
            }

            if (shouldValidate) {
              const usfmValidatedArray = validateUsfmArray(usfmArray);
              if (!usfmValidatedArray.length) {
                dispatch({
                  type: "invalid-file",
                  fileType: "All USFM files within the zip were invalid!",
                });
                return;
              }
              dispatch({
                type: "file-uploaded",
                usfmData: usfmValidatedArray,
              });
            } else {
              dispatch({
                type: "file-uploaded",
                usfmData: usfmArray,
              });
            }
            handleZipLoad(state.file);
          } else {
            dispatch({
              type: "invalid-file",
              fileType: "Non-zip file was uploaded!",
            });
          }
        } catch (error) {
          if (error.message !== CANCEL_FILE_OPEN_ERROR) {
            console.error(error);
            dispatch({ type: "upload-error", error });
          }
        }
      }
    };
    processFile();
  }, [state.file, state.isLoading]);

  // Now we need to read usfm data.

  return {
    ...state,
    onChange,
    onSubmit,
  };
};

export default useZipToUsfmData;
