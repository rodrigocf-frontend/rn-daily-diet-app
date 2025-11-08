import { theme } from "../themes";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Feedback } from "@/screens/Feedback";
import { Statistics } from "@/screens/Statistics";
import { NewSnack } from "@/screens/NewSnack";
import {
  StaticParamList,
  createStaticNavigation,
} from "@react-navigation/native";
import { SnackScreen } from "@/screens/Snack";

const RootRoutes = createNativeStackNavigator({
  screens: {
    Home,
    Feedback,
    Snack: SnackScreen,
    Statistics,
    NewSnack,
  },
});

export const Navigation = createStaticNavigation(RootRoutes);

type RootStackParamList = StaticParamList<typeof RootRoutes>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
