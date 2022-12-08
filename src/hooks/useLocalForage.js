import { useState, useEffect } from "react";
import localforage from "localforage";

const useLocalForage = (storeName) => {
  const [store, setStore] = useState(null);
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    setStore(
      localforage.createInstance({
        driver: [localforage.INDEXEDDB],
        name: storeName,
      })
    );
  }, []);

  useEffect(() => {
    if (store) getAllFromStore();
  }, [store]);

  const isStoreEmpty = async () => {
    if (!store) {
      await setStore(
        localforage.createInstance({
          driver: [localforage.INDEXEDDB],
          name: storeName,
        })
      );
    }
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

  const getAllFromStore = async () => {
    const isEmpty = await isStoreEmpty();
    if (isEmpty) return [];

    let result = [];
    const iteratorCallback = (value, key, iterationNumber) => {
      console.log({ key, value });
      result = [...result, { key, data: value }];
    };

    const successCallback = () => {
      setStoreData(result);
    };
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
    storeData,
    isStoreEmpty,
    getFromStore,
    setInStore,
  };
};

export default useLocalForage;
