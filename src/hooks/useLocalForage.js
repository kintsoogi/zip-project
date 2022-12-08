import { useState, useEffect } from "react";
import localforage from "localforage";

const useLocalForage = (storeName) => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    setStore(
      localforage.createInstance({
        driver: [localforage.INDEXEDDB],
        name: storeName,
      })
    );
  }, []);

  const isStoreEmpty = async () => {
    if (!store) return true;
    try {
      const storeLength = await store.length();
      if (storeLength) return false;
      return true;
    } catch (error) {
      console.log(
        "Error while checking if localforage store was empty: ",
        error
      );
    }
  };

  const getAllFromStore = async (store) => {
    const isEmpty = await isStoreEmpty(store);
    if (isEmpty) return [];

    let result = [];
    const iteratorCallback = (value, key, iterationNumber) => {
      console.log({ key, value });
      result = [...result, { key, data: value }];
    };

    const successCallback = () => result;

    await store.iterate(iteratorCallback, successCallback);
  };

  const getFromStore = async (key) => {
    try {
      return await store.getItem(key);
    } catch (error) {
      console.log("Error while retrieving key from IndexedDB...", error);
    }
  };

  const setInStore = async (key, value) => {
    try {
      await store.setItem(key, value);
    } catch (error) {
      console.log("Error while retrieving key from IndexedDB...", error);
    }
  };

  return {
    store,
    isStoreEmpty,
    getAllFromStore,
    getFromStore,
    setInStore,
  };
};

export default useLocalForage;
