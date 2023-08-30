import AsyncStorage from "@react-native-async-storage/async-storage";

const dataType = "resources";
/* GETTER */
export const getItemsFromStorage = async () => {
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
// Function to remove an item from AsyncStorage
export const removeItem = async () => {
  try {
    await AsyncStorage.removeItem(dataType);
    console.log("Item removed successfully.");
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
