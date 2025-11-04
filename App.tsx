import { Home } from "@/screens/Home";
import { Providers } from "@/store";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    NUNITO_REGULAR: NunitoSans_400Regular,
    NUNITO_BOLD: NunitoSans_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Providers>
      <Home />
      <StatusBar />
    </Providers>
  );
}
