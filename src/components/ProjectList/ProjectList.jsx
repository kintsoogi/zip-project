import React from 'react'

import ProjectItem from './ProjectItem'
import useProjectsStore from '../../hooks/useProjectsStore'

const ProjectList = () => {
  const { projects } = useProjectsStore()

  const renderedProjectItems = projects.map(project => (
    <ProjectItem key={project.name} project={project} />
  ))

  return (
    <div>
      <h2>Project List</h2>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Books</th>
          </tr>
        </thead>
        <tbody>{renderedProjectItems}</tbody>
      </table>
    </div>
  )
}

export default ProjectList
