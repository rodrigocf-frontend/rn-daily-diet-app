import { StoreDailies } from "@/store/DailyContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DAILY_STORAGE = "@store/dailies";

export const setDailies = async (data: StoreDailies) => {
  try {
    console.log("[STORE] - Saving dailies");
    await AsyncStorage.setItem(DAILY_STORAGE, JSON.stringify(data));

    console.log("[STORE] - Saved");
  } catch {
    throw Error("[STORE] - Failed to save dailies");
  }
};

export const getDailies = async (): Promise<StoreDailies> => {
  try {
    console.log("[STORE] - get dailies");
    const data = await AsyncStorage.getItem(DAILY_STORAGE);

    if (data) {
      const dataToJSON: StoreDailies = JSON.parse(data);
      return dataToJSON;
    }

    console.log("[STORE] - empty dailies");
    return {
      dailies: [],
      lastDailyId: 0,
    };
  } catch {
    throw Error("[STORE] - Failed to save dailies");
  }
};
