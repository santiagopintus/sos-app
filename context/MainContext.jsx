import { createContext, useEffect, useState } from "react";
import {
  setItemsToStorage,
  removeItem,
  getItemsFromStorage,
} from "../components/utils/AsyncStorage";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [resources, setResources] = useState(null);

  const addResource = (item) => {
    setItemsToStorage(item);
  };

  useEffect(() => {
    async function fetchResources() {
      const resourcesArray = await getItemsFromStorage();
      setResources(resourcesArray);
    }
    fetchResources();
  }, []);

  const editItem = (item) => {
    let array = getArray(item.type);
    let i = getIndex(item);
    array[i] = item;
    console.log("UPDATED ITEM (NOT YET)");
    console.log(array[i]);
  };

  const getArray = (type = "resources") => {
    return type === "resources" ? resources : null;
  };

  const getResources = () => {
    return getArray();
  };

  const getIndex = (item) => {
    return getArray(item.type).indexOf(getItem(item.id, item.type));
  };

  const getItem = (id, type) => {
    let array = getArray(type);
    if (!array) return;
    return array.find((i) => i.id === id);
  };

  //UNCOMMENTING THIS WILL REMOVE ALL RESOURCES
  // useEffect(() => {
  //   removeItem("resources");
  // }, []);

  return (
    <MainContext.Provider
      value={{ setResources, editItem, addResource, getResources }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
