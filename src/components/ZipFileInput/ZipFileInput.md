# Use Zip USFM File Input Demo

This demo demonstrates the ability to upload a zip file containing USFM files.

This is done primarily through the _useZipUsfmFileInput_ hook, and input component can vary from project to project.

## Example

```jsx
import React, { useState } from 'react'
import { useZipUsfmFileInput } from 'zip-project'

function Component() {
  const [usfmArray, setUsfmArray] = useState([])
  const handleZipLoad = (usfmData, file) => {
    setUsfmArray([...usfmData])
  }

  const {
    status,
    isLoading,
    invalidFileType,
    uploadError,
    onChange,
    onSubmit,
  } = useZipUsfmFileInput(handleZipLoad, true)

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
    const usfmFiles = usfmArray.map(data => {
      return { ...data, usfmText: data.usfmText.slice(0, 10) }
    })
    return <div>{JSON.stringify(usfmFiles)}</div>
  }

  return (
    <>
      <input type='file' accept='.zip' onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>
    </>
  )
}

;<Component />
```
