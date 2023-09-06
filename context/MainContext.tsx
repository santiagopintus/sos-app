import { createContext, useEffect, useState } from "react";
import {
  setItemsToStorage,
  removeItemById,
  getItemsFromStorage,
} from "../components/utils/AsyncStorage";

type MainContextType = {
  setResources: React.Dispatch<React.SetStateAction<Resource[]>>;
  editItem: (resource: Resource) => void;
  addResource: (resource: Resource) => void;
  removeResource: (resId: string) => void;
  getResources: () => Resource[];
};

export type Resource = {
  id?: number;
  title: string;
  textContent: string | null;
  type: string;
  imgSrc: string | null;
  href: string | null;
};

const MainContext = createContext({} as MainContextType);

const MainProvider = ({ children }) => {
  const [resources, setResources] = useState(null);

  const addResource = (resource: Resource) => {
    resource.id = getMaxId();
    setItemsToStorage(resource);
  };

  const getMaxId = (): number => {
    let id = 0;
    resources.forEach((r: Resource) => {
      if (r.id + 1 > id) {
        id = r.id + 1;
      }
    });
    return id;
  };

  const removeResource = (resId: string) => {
    removeItemById(resId);
  };

  useEffect(() => {
    async function fetchResources() {
      const resourcesArray = await getItemsFromStorage();
      setResources(resourcesArray);
    }
    fetchResources();
  }, []);

  const editItem = (resource: Resource) => {
    let array = getArray(resource.type);
    let i = getIndex(resource);
    array[i] = resource;
    console.log("UPDATED ITEM (NOT YET)");
    console.log(array[i]);
  };

  const getArray = (type = "resources") => {
    return type === "resources" ? resources : null;
  };

  const getResources = (): Resource[] => {
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
      value={{
        setResources,
        editItem,
        addResource,
        removeResource,
        getResources,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
