# Export USFM Zip Demo

This demo demonstrates the ability to save usfm project data to zip file.

## Example

```jsx
import React from 'react'
import useExportUsfmZip from './useExportUsfmZip'

const USFM_DATA = [
  {
    filename: 'fake1.usfm',
    usfmText: 'id TITmt Titus 1p',
  },
  {
    filename: 'fake2.usfm',
    usfmText: 'id TITmt Titus 1p',
  },
  {
    filename: 'fake3.usfm',
    usfmText: 'id TITmt Titus 1p',
  },
]

function Component() {
  const { handleExportZip } = useExportUsfmZip(USFM_DATA)

  return <button onClick={handleExportZip}>Submit</button>
}

;<Component />
```
