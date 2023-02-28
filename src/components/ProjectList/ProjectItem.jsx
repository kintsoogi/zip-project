import React from 'react'

import useProjectsContext from '../../hooks/useProjectsContext'

const ProjectItem = ({ project }) => {
  const { selectProject } = useProjectsContext()

  return (
    <tr
      data-cy='project-item'
      onClick={() => selectProject(project)}
      style={{ cursor: 'pointer' }}
    >
      <td>{project.name}</td>
      <td>{project.data.length}</td>
    </tr>
  )
}

export default ProjectItem
