import { useStore } from 'zustand'
import ProjectsStore from '../stores/ProjectsStore'

const useProjectsStore = () => {
  return useStore(ProjectsStore)
}

export default useProjectsStore
