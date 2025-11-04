import { theme } from "@/themes";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components/native";

export function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
