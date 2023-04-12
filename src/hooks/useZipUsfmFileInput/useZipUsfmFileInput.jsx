import { useEffect, useReducer } from 'react'

import {
  fileBufferToUsfmData,
  validateUsfmData,
} from '../../utils/convertUsfmZip'
import { fileReducer, initialState } from './FileReducer'

// Constants
const CANCEL_FILE_OPEN_ERROR =
  "Cannot read properties of undefined (reading 'type')"
const USFM_NO_BOOKID_ERROR = 'USFM Text Invalid! ~ Did not contain Book ID'

/**
 *
 * @param {function} handleZipLoad function that takes usfmData and file data. It is called on successful file upload
 * @param {function} validator function that takes in USFM data and returns only valid USFM data
 * @returns Object containing file input state and actions to change, submit, and reload
 */
const useZipUsfmFileInput = (
  handleZipLoad = (usfmData, file) => {
    console.log(file)
    console.log(usfmData)
  },
  validator = null
) => {
  const [state, dispatch] = useReducer(fileReducer, initialState)

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

  const triggerReload = () => {
    dispatch({ type: 'reload' })
  }

  // When user has submitted the file, proccess it, validate it, and call parameter function
  // to store it.
  useEffect(() => {
    const processFile = async () => {
      if (state.file && state.isLoading) {
        try {
          if (state.file.type.includes('zip')) {
            const arrayBuffer = await state.file.arrayBuffer()
            const usfmData = await fileBufferToUsfmData(arrayBuffer)

            if (!usfmData.length) {
              dispatch({
                type: 'invalid-file',
                fileType: 'Zip file with no usfm files was uploaded!',
              })
              return
            }

            if (validator) {
              const usfmValidatedData = validator(usfmData)
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
          if (error.message === USFM_NO_BOOKID_ERROR) {
            dispatch({
              type: 'invalid-file',
              fileType:
                'Zip contained Invalid USFM files that did not contain Book IDs!',
            })
            return
          }
          if (error.message !== CANCEL_FILE_OPEN_ERROR) {
            console.error(error)
            dispatch({ type: 'upload-error', error })
          }
        }
      }
    }
    processFile()
  }, [state.file, state.isLoading, validator])

  // Run callback function when usfm data is successfully uploaded
  useEffect(() => {
    if (state.usfmData) handleZipLoad(state.usfmData, state.file)
  }, [state.usfmData])

  return {
    ...state,
    onChange,
    onSubmit,
    triggerReload,
  }
}

export default useZipUsfmFileInput
