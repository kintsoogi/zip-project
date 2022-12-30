# ProjectList Demo

This Demo demonstrates that project data can be retrieved from IndexedDB via localforage when a user uploads zip usfm file data.

_If no data is displaying, upload a zip containing usfm files in [CreateZipProject](#createzipproject) component_

```jsx
import React, { useEffect } from 'react'

import { ProjectsProvider } from '../../context/projects'
import useProjectsContext from '../../hooks/useProjectsContext'

function Component() {
  const { fetchProjects } = useProjectsContext()

  useEffect(() => {
    fetchProjects()
  }, [])

  return <ProjectList />
}

;<ProjectsProvider>
  <Component />
</ProjectsProvider>
```
