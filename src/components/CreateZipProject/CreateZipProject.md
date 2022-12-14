# Create Zip Project Demo

This demo demonstrates the ability to create a project of USFM books given a zip file containing usfm files.

On successful zip upload:

- Project object with USFM data is added to the `projects` context.
- Binary USFM data is uploaded to IndexedDB via localforage.
- Callback function `onCreate` is called with the array containing usfm data (filename and USFM text).

_To see persisted project/USFM data, see [ProjectList](#projectlist)_

## Example 1: With Validation

The `shouldValidate` prop (which defaults to `true`) determines whether or not USFM files will be validated.

This demo demonstrates validation as USFM files are only added to the project if they are valid.

Look in console for uploaded USFM data.

```jsx
import React from "react";
import { ProjectsProvider } from "../../context/projects";

function Component() {
  const handleCreateZip = (usfmData) => {
    console.log(usfmData);
  };

  return <CreateZipProject onCreate={handleCreateZip} />;
}

<ProjectsProvider>
  <Component />
</ProjectsProvider>;
```

## Example 2: Without Validation

Without validation turned on, all USFM files (not non-USFM files) are added to the project.

```jsx
import React from "react";
import { ProjectsProvider } from "../../context/projects";

function Component() {
  const handleCreateZip = (usfmData) => {
    console.log(usfmData);
  };

  return <CreateZipProject onCreate={handleCreateZip} shouldValidate={false} />;
}

<ProjectsProvider>
  <Component />
</ProjectsProvider>;
```
