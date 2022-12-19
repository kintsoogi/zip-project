# Export USFM Zip Demo

This demo demonstrates the ability to save usfm project data to zip file.

## Example

```jsx
import React from "react";
import { ProjectsProvider } from "../../context/projects";

const USFM_DATA = [
  {
    filename: "fake1.usfm",
    usfmText: "id TITmt Titus 1p",
  },
  {
    filename: "fake2.usfm",
    usfmText: "id TITmt Titus 1p",
  },
  {
    filename: "fake3.usfm",
    usfmText: "id TITmt Titus 1p",
  },
];

function Component() {
  return <ExportUsfmZip zipFilename="test" usfmData={USFM_DATA} />;
}

<ProjectsProvider>
  <Component />
</ProjectsProvider>;
```
