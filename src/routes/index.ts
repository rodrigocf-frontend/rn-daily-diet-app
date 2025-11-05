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
  ParamListBase,
  RouteProp,
  StaticParamList,
  createStaticNavigation,
} from "@react-navigation/native";
import { UserHeader } from "@/components/UserHeader";

const configOptionsScreenStatistics = (
  route: RouteProp<ParamListBase, string>
): NativeStackNavigationOptions => {
  const params = route.params as StatisticsScreenProps;

  return {
    headerShadowVisible: false,
    title: "",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: params.withinTheDiet
        ? theme.color.GREEN_LIGHT
        : theme.color.RED_LIGHT,
    },
    contentStyle: {
      backgroundColor: params.withinTheDiet
        ? theme.color.GREEN_LIGHT
        : theme.color.RED_LIGHT,
    },
    headerTintColor: params.withinTheDiet
      ? theme.color.GREEN_DARK
      : theme.color.RED_DARK,
  };
};

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
