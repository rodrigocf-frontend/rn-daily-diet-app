import { theme } from "@/themes";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components/native";
import { DailyProvider } from "./DailyContext";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <DailyProvider>{children}</DailyProvider>
    </ThemeProvider>
  );
}
