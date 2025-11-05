import { theme } from "../themes";

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Feedback } from "@/screens/Feedback";
import { Snack } from "@/screens/Snack";
import { Statistics, StatisticsScreenProps } from "@/screens/Statistics";
import { NewSnack } from "@/screens/NewSnack";
import {
  StaticParamList,
  createStaticNavigation,
} from "@react-navigation/native";

const RootRoutes = createNativeStackNavigator({
  screens: {
    Home,
    Feedback,
    Snack,
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
