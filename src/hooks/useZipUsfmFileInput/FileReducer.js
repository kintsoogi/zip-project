const FILE_LOADED = 'FILE_LOADED'
const INIT = 'INIT'
const INVALID_FILE = 'INVALID_FILE'
const UPLOAD_ERROR = 'UPLOAD_ERROR'
const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'

export const initialState = {
  status: 'idle',
  file: null,
  isLoading: false,
  usfmData: null,
  invalidFileType: '',
  uploadError: null,
}

export const fileReducer = (state, action) => {
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
    case 'reload':
      return { ...initialState }
    default:
      return state
  }
}

export default fileReducer
