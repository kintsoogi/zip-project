import { createStore } from 'zustand/vanilla'
import {
  storeBufferToUsfmData,
  usfmDataToStoreBuffer,
} from '../utils/convertUsfmZip'

import {
  createStore as createIdbStore,
  getAllFromStore,
  setInStore,
  deleteFromStore,
} from '../utils/LocalForageHelpers'

const ProjectsStore = createStore((set, get) => ({
  projects: [],
  selectedProject: null,
  idbStore: createIdbStore('projects'),
  fetchCachedProjects: async () => {
    const storeData = await getAllFromStore(get().idbStore)
    const projectPromises = storeData.map(async data => {
      return {
        id: data.id,
        name: data.key,
        data: await storeBufferToUsfmData(data.value),
      }
    })
    const projects = await Promise.all(projectPromises)
    set(() => ({ projects }))
  },
  projectExists: projectName => {
    return get().projects.some(project => project.name === projectName)
  },
  getProject: projectName => {
    return get().projects.find(project => project.name === projectName)
  },
  addProject: async (projectName, data) => {
    if (get().projectExists(projectName)) {
      return false
    }

    const newProject = {
      id: get().projects.length,
      name: projectName,
      data,
    }
    const usfmArrayBuffer = await usfmDataToStoreBuffer(data)

    await setInStore(get().idbStore, projectName, usfmArrayBuffer)
    set(state => ({ projects: [...state.projects, newProject] }))
    return false
  },
  updateProject: async (projectName, usfmData) => {
    if (!get().projectExists(projectName)) {
      return false
    }

    const updatedProjects = get().projects.map(project => {
      if (project.name === projectName) {
        return { ...project, data: usfmData }
      }
      return project
    })
    const usfmArrayBuffer = await usfmDataToStoreBuffer(usfmData)

    await setInStore(get().idbStore, projectName, usfmArrayBuffer)
    set(() => ({ projects: updatedProjects }))
    return true
  },
  deleteProject: async projectName => {
    if (!get().projectExists(projectName)) {
      return false
    }

    await deleteFromStore(get().idbStore, projectName)
    setProjects(get().projects.filter(project => project.name !== projectName))
    return true
  },
  selectProject: project => set(() => ({ selectedProject: { ...project } })),
}))

export default ProjectsStore
