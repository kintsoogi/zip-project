import { useCallback } from 'react'

import localforage from 'localforage'

const useLocalForage = (storeName = '') => {
  const store = localforage.createInstance({ name: storeName })

  const isStoreEmpty = async () => {
    try {
      const storeLength = await store.length()
      if (storeLength) return false
      return true
    } catch (error) {
      console.log(
        `Error while checking if ${storeName} store was empty: `,
        error
      )
    }
  }

  const getAllFromStore = useCallback(async () => {
    let result = []

    const iteratorCallback = (value, key, iterationNumber) => {
      result = [...result, { id: iterationNumber - 1, key, value }]
    }

    try {
      await store.iterate(iteratorCallback)
      return result
    } catch (error) {
      console.log('Error while iterating over localforage...', error)
      return false
    }
  }, [])

  const getFromStore = async key => {
    try {
      return await store.getItem(key)
    } catch (error) {
      console.log(`Error while retrieving ${key} from IndexedDB...`, error)
      return false
    }
  }

  const setInStore = async (key, value) => {
    try {
      await store.setItem(key, value)
      return true
    } catch (error) {
      console.log(`Error while storing ${key} in IndexedDB...`, error)
      return false
    }
  }

  const deleteFromStore = async key => {
    try {
      await store.removeItem(key)
    } catch (error) {
      console.log(`Error while deleting ${key} from IndexedDB...`, error)
      return false
    }
  }

  return {
    isStoreEmpty,
    getAllFromStore,
    getFromStore,
    setInStore,
    deleteFromStore,
  }
}

export default useLocalForage
