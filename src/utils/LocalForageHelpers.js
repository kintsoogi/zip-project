import localforage from 'localforage'

export const createStore = storeName => {
  return localforage.createInstance({ name: storeName })
}

export const isStoreEmpty = async store => {
  try {
    const storeLength = await store.length()
    if (storeLength) return false
    return true
  } catch (error) {
    console.log(`Error while checking if ${storeName} store was empty: `, error)
  }
}

export const getAllFromStore = async store => {
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
}

export const getFromStore = async (store, key) => {
  try {
    return await store.getItem(key)
  } catch (error) {
    console.log(`Error while retrieving ${key} from IndexedDB...`, error)
    return false
  }
}

export const setInStore = async (store, key, value) => {
  try {
    await store.setItem(key, value)
    return true
  } catch (error) {
    console.log(`Error while storing ${key} in IndexedDB...`, error)
    return false
  }
}

export const deleteFromStore = async (store, key) => {
  try {
    await store.removeItem(key)
  } catch (error) {
    console.log(`Error while deleting ${key} from IndexedDB...`, error)
    return false
  }
}
