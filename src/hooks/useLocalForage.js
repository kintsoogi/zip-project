import { useCallback } from "react";

import localforage from "localforage";

const useLocalForage = () => {
  const isStoreEmpty = async () => {
    try {
      const storeLength = await localforage.length();
      if (storeLength) return false;
      return true;
    } catch (error) {
      console.log(
        "Error while checking if localforage store was empty: ",
        error
      );
    }
  };

  const getAllFromStore = useCallback(async () => {
    let result = [];

    const iteratorCallback = (value, key, iterationNumber) => {
      result = [...result, { id: iterationNumber - 1, key, value }];
    };

    try {
      await localforage.iterate(iteratorCallback);
      return result;
    } catch (error) {
      console.log("Error while iterating over localforage...", error);
      return false;
    }
  }, []);

  const getFromStore = async (key) => {
    try {
      return await localforage.getItem(key);
    } catch (error) {
      console.log(`Error while retrieving ${key} from IndexedDB...`, error);
      return false;
    }
  };

  const setInStore = async (key, value) => {
    try {
      await localforage.setItem(key, value);
      return true;
    } catch (error) {
      console.log(`Error while storing ${key} in IndexedDB...`, error);
      return false;
    }
  };

  const deleteFromStore = async (key) => {
    try {
      await localforage.removeItem(key);
    } catch (error) {
      console.log(`Error while deleting ${key} from IndexedDB...`, error);
      return false;
    }
  };

  return {
    isStoreEmpty,
    getAllFromStore,
    getFromStore,
    setInStore,
    deleteFromStore,
  };
};

export default useLocalForage;
