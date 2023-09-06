import AsyncStorage from "@react-native-async-storage/async-storage";
import { Resource } from "../../context/MainContext";

const dataType = "resources";
/* GETTER */
export const getItemsFromStorage = async (): Promise<Resource[]> => {
  try {
    const resourcesString = await AsyncStorage.getItem(dataType);
    const resourcesArray = resourcesString ? JSON.parse(resourcesString) : [];
    return resourcesArray;
  } catch (e) {
    console.error(`Error getting ${dataType} items from AsyncStorage: ${e}`);
    return [];
  }
};

/* REMOVE */
// Function to remove an item from AsyncStorage by ID
export const removeItemById = async (id: string) => {
  try {
    const resourcesArray = await getItemsFromStorage();

    // Find the index of the item with the specified ID
    const indexToRemove = resourcesArray.findIndex(
      (resource) => resource.id === id
    );

    if (indexToRemove !== -1) {
      // Remove the item from the array
      resourcesArray.splice(indexToRemove, 1);

      // Update AsyncStorage with the modified array
      await AsyncStorage.setItem(dataType, JSON.stringify(resourcesArray));
      console.log("Item removed successfully.");
    } else {
      console.log("Item with ID not found.");
    }
  } catch (error) {
    console.error("Error removing item:", error);
  }
};

/* SETTER */
export const setItemsToStorage = async (newItem) => {
  try {
    const existingResources = await AsyncStorage.getItem(dataType);
    const resourcesArray = existingResources
      ? JSON.parse(existingResources)
      : [];
    resourcesArray.push(newItem);
    await AsyncStorage.setItem(dataType, JSON.stringify(resourcesArray));
    console.log("Object added to the array successfully.");
  } catch (e) {
    console.error(`Error setting ${dataType} items to AsyncStorage: ${e}`);
  }
};
