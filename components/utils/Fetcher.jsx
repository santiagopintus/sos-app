import { useContext, useEffect } from "react";
import { MainContext } from "../../context/MainContext";
import { getItemsFromStorage } from "./AsyncStorage";

export default Fetcher = () => {
  const { setResources } = useContext(MainContext);

  const fetchData = async () => {
    const resources = await getItemsFromStorage("resources");
    setResources(resources);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return null;
};
