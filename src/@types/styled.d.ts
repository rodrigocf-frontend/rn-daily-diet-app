import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    color: {
      RED_DARK: string;
      RED_MID: string;
      RED_LIGHT: string;
      GREEN_DARK: string;
      GREEN_MID: string;
      GREEN_LIGHT: string;
      GRAY_100: string;
      GRAY_200: string;
      GRAY_300: string;
      GRAY_400: string;
      GRAY_500: string;
      GRAY_600: string;
      GRAY_700: string;
      WHITE: string;
    };

    font: {
      NUNITO_REGULAR: string;
      NUNITO_BOLD: string;
    };

    size: {
      XSM: number;
      SM: number;
      NM: number;
      LG: number;
      XL: number;
      "2XL": number;
    };
  }
}
