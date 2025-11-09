import { UserHeader } from "@/components/UserHeader";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { DefaultTheme } from "styled-components/native";

export const setStatisticsScreenOptions = ({
  countTotalSnacks,
  isGoodDiet,
  theme,
}: {
  countTotalSnacks: number;
  isGoodDiet: boolean;
  theme: DefaultTheme;
}): NativeStackNavigationOptions => {
  const bgColor =
    countTotalSnacks === 0
      ? theme.color.GREEN_LIGHT
      : isGoodDiet
      ? theme.color.GREEN_LIGHT
      : theme.color.RED_LIGHT;

  return {
    headerShadowVisible: false,
    title: "",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: bgColor,
    },
    contentStyle: {
      backgroundColor: bgColor,
    },
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
      paddingTop: 20,
      backgroundColor: theme.color.GRAY_500,
    },
    headerTintColor: theme.color.GRAY_100,
  };
};

export const setSnackScreenOptions = ({
  withinTheDiet,
  theme,
}: {
  withinTheDiet: boolean;
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
    contentStyle: {
      paddingTop: 20,
      backgroundColor: withinTheDiet
        ? theme.color.GREEN_LIGHT
        : theme.color.RED_LIGHT,
    },
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
