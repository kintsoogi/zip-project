import { useEffect, useReducer } from 'react'

import {
  arrayBufferToUsfmData,
  validateUsfmData,
} from '../utils/zipUsfmHelpers'

// Constants
const CANCEL_FILE_OPEN_ERROR =
  "Cannot read properties of undefined (reading 'type')"
const FILE_LOADED = 'FILE_LOADED'
const INIT = 'INIT'
const INVALID_FILE = 'INVALID_FILE'
const UPLOAD_ERROR = 'UPLOAD_ERROR'
const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'

const initialState = {
  status: 'idle',
  file: null,
  isLoading: false,
  usfmData: null,
  invalidFileType: '',
  uploadError: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'upload':
      return { ...state, file: action.file, status: FILE_LOADED }
    case 'submit':
      return { ...state, isLoading: true, status: INIT }
    case 'file-uploaded':
      return {
        ...state,
        isLoading: false,
        usfmData: action.usfmData,
        status: UPLOAD_SUCCESS,
      }
    case 'invalid-file':
      return {
        ...state,
        isLoading: false,
        invalidFileType: action.fileType,
        status: INVALID_FILE,
      }
    case 'upload-error':
      return {
        ...state,
        isLoading: false,
        uploadError: action.error,
        status: UPLOAD_ERROR,
      }
    default:
      return state
  }
}

const useZipUsfmFileInput = (
  handleZipLoad = (usfmData, file) => {
    console.log(file)
    console.log(usfmData)
  },
  shouldValidate
) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onSubmit = () => {
    if (state.file) {
      dispatch({ type: 'submit' })
    } else {
      window.alert('No zip file has been input!')
    }
  }

  const onChange = e => {
    if (e.target.files[0]) {
      dispatch({ type: 'upload', file: e.target.files[0] })
    }
  }

  // When user has submitted the file, proccess it, validate it, and call parameter function
  // to store it.
  useEffect(() => {
    const processFile = async () => {
      if (state.file && state.isLoading) {
        try {
          if (state.file.type.includes('zip')) {
            const arrayBuffer = await state.file.arrayBuffer()
            const usfmData = await arrayBufferToUsfmData(arrayBuffer)

            if (!usfmData.length) {
              dispatch({
                type: 'invalid-file',
                fileType: 'Zip file with no usfm files was uploaded!',
              })
              return
            }

            if (shouldValidate) {
              const usfmValidatedData = validateUsfmData(usfmData)
              if (!usfmValidatedData.length) {
                dispatch({
                  type: 'invalid-file',
                  fileType: 'All USFM files within the zip were invalid!',
                })
                return
              }
              dispatch({
                type: 'file-uploaded',
                usfmData: usfmValidatedData,
              })
            } else {
              dispatch({
                type: 'file-uploaded',
                usfmData: usfmData,
              })
            }
          } else {
            dispatch({
              type: 'invalid-file',
              fileType: 'Non-zip file was uploaded!',
            })
          }
        } catch (error) {
          if (error.message !== CANCEL_FILE_OPEN_ERROR) {
            console.error(error)
            dispatch({ type: 'upload-error', error })
          }
        }
      }
    }
    processFile()
  }, [state.file, state.isLoading, shouldValidate])

  // Run callback function when usfm data is successfully uploaded
  useEffect(() => {
    if (state.usfmData) handleZipLoad(state.usfmData, state.file)
  }, [state.usfmData])

  return {
    ...state,
    onChange,
    onSubmit,
  }
}

export default useZipUsfmFileInput
