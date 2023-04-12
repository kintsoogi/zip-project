import React, { useState } from 'react'
import PropTypes from 'prop-types'

import useZipUsfmFileInput from '../../hooks/useZipUsfmFileInput/useZipUsfmFileInput'
import useProjectsStore from '../../hooks/useProjectsStore'

const CreateZipProject = ({ onCreate }) => {
  const [projectName, setProjectName] = useState('')
  const { addProject } = useProjectsStore()

  const handleZipLoad = async (usfmData, file) => {
    await addProject(projectName, usfmData)
    onCreate(usfmData)
  }

  const {
    status,
    isLoading,
    invalidFileType,
    uploadError,
    onChange,
    onSubmit,
  } = useZipUsfmFileInput(handleZipLoad)

  if (isLoading) {
    return <div>Loading....</div>
  }

  if (uploadError) {
    return (
      <div>
        <h1>An Error occured:</h1>
        <p>{uploadError.message}</p>
      </div>
    )
  }

  if (invalidFileType) {
    return (
      <div>
        <p>{`Invalid file upload: ${invalidFileType}`}</p>
      </div>
    )
  }

  if (status === 'UPLOAD_SUCCESS') {
    return (
      <div>
        <p>wohoo it worked!</p>
      </div>
    )
  }

  return (
    <div className='open-zip-project'>
      <h1>Input zipped USFM files...</h1>
      <form onSubmit={onSubmit}>
        <input
          data-cy='zip-text-input'
          placeholder='Project Name'
          name='projectName'
          value={projectName}
          onChange={e => {
            setProjectName(e.target.value)
          }}
        />
        <input type='file' accept='.zip' onChange={onChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

CreateZipProject.propTypes = {
  /** Parameters: usfmData | Called when zip file has loaded to act upon usfm data */
  onCreate: PropTypes.func,
}

export default CreateZipProject
