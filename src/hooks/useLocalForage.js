import { useState, useEffect } from "react";
import localforage from "localforage";

const useLocalForage = (storeName) => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    setStore(
      localforage.createInstance({
        name: storeName,
      })
    );
  }, []);

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
    getFromStore,
    setInStore,
  };
};

export default useLocalForage;
