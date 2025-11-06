import styled, { DefaultTheme } from "styled-components/native";

export interface ContainerProps {
  bgColor?: keyof DefaultTheme["color"];
}

export const Container = styled.View<ContainerProps>`
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme, bgColor = "GRAY_600" }) =>
    theme.color[bgColor]};
  flex-direction: row;
  position: relative;
  flex: 1;
`;
