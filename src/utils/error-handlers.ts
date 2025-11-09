import { Alert } from "react-native";

export const AppError = (e: unknown) => {
  if (e instanceof Error) {
    Alert.alert("Error", e.message);
  }
  return Alert.alert("Error", "Unexpected error.");
};
