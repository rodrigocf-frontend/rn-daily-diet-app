import { UserHeader } from "@/components/UserHeader";
import { StatisticsScreenProps } from "@/screens/Statistics";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { DefaultTheme } from "styled-components/native";

export const setStatisticsScreenOptions = ({
  withinTheDiet,
  theme,
}: StatisticsScreenProps & {
  theme: DefaultTheme;
}): NativeStackNavigationOptions => {
  return {
    headerShadowVisible: false,
    title: "",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: withinTheDiet
        ? theme.color.GREEN_LIGHT
        : theme.color.RED_LIGHT,
    },
    contentStyle: {
      backgroundColor: withinTheDiet
        ? theme.color.GREEN_LIGHT
        : theme.color.RED_LIGHT,
    },
    headerTintColor: withinTheDiet
      ? theme.color.GREEN_DARK
      : theme.color.RED_DARK,
  };
};

export const setNewSnackScreenOptions = ({
  theme,
  isEditing,
}: {
  theme: DefaultTheme;
  isEditing?: boolean;
}): NativeStackNavigationOptions => {
  return {
    headerShadowVisible: false,
    title: isEditing ? "Editar refeição" : "Nova refeição",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontFamily: theme.font.NUNITO_BOLD,
      fontSize: theme.size.LG,
    },
    headerStyle: {
      backgroundColor: theme.color.GRAY_500,
    },

    contentStyle: {
      backgroundColor: theme.color.GRAY_500,
    },
    headerTintColor: theme.color.GRAY_100,
  };
};

export const setSnackScreenOptions = ({
  withinTheDiet,
  theme,
}: StatisticsScreenProps & {
  theme: DefaultTheme;
}): NativeStackNavigationOptions => {
  return {
    headerShadowVisible: false,
    title: "Refeição",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontFamily: theme.font.NUNITO_BOLD,
      fontSize: theme.size.LG,
    },
    headerStyle: {
      backgroundColor: withinTheDiet
        ? theme.color.GREEN_LIGHT
        : theme.color.RED_LIGHT,
    },
    headerTintColor: theme.color.GRAY_100,
  };
};

export const setHomeScreenOptions = (): NativeStackNavigationOptions => {
  return {
    header: UserHeader,
  };
};

export const setFeedbackScreenOptions = (): NativeStackNavigationOptions => {
  return {
    headerShown: false,
  };
};
