import React from 'react'

import useProjectsStore from '../../hooks/useProjectsStore'

const ProjectItem = ({ project }) => {
  const { selectProject } = useProjectsStore()

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
