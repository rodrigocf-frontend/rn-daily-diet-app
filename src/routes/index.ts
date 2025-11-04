import { theme } from "../themes";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Feedback } from "@/screens/Feedback";
import { Snack } from "@/screens/Snack";
import { Statistics } from "@/screens/Statistics";
import { NewSnack } from "@/screens/NewSnack";
import {
  StaticParamList,
  createStaticNavigation,
} from "@react-navigation/native";

const RootRoutes = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
      },
    },
    Feedback: {
      screen: Feedback,
      options: {
        headerShown: false,
      },
    },
    Snack: {
      screen: Snack,
      options: {
        headerTitleAlign: "center",
      },
    },
    Statistics: {
      screen: Statistics,
      options: {
        headerShown: false,
      },
    },
    NewSnack: {
      screen: NewSnack,
      options: {
        headerTitleAlign: "center",
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootRoutes);

type RootStackParamList = StaticParamList<typeof RootRoutes>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
