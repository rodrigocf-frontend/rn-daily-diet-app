import { StoreDailies, StoreSnacks } from "@/store/DailyContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SNACKS_STORAGE = "@store/snacks";

export const setSnacks = async (data: StoreSnacks) => {
  try {
    console.log("[STORE] - Saving snacks");
    await AsyncStorage.setItem(SNACKS_STORAGE, JSON.stringify(data));

    console.log("[STORE] - Saved");
  } catch {
    throw Error("[STORE] - Failed to save snacks");
  }
};

export const getSnacks = async (): Promise<StoreSnacks> => {
  try {
    console.log("[STORE] - get snacks");
    const data = await AsyncStorage.getItem(SNACKS_STORAGE);

    if (data) {
      const dataToJSON: StoreSnacks = JSON.parse(data);
      return dataToJSON;
    }

    console.log("[STORE] - empty snacks");
    return {
      snacks: [],
      lastSnackId: 0,
    };
  } catch {
    throw Error("[STORE] - Failed to save snacks");
  }
};
