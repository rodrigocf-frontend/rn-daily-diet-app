import { CircleIcon } from "phosphor-react-native";
import styled from "styled-components/native";

export type ButtonVariant = {
  variant?: "primary" | "secondary";
  isActive?: boolean;
};

export const Container = styled.TouchableOpacity.attrs<ButtonVariant>({
  activeOpacity: 1,
})`
  padding: 16px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  background-color: ${({ theme, variant, isActive }) =>
    variant === "secondary" && isActive
      ? theme.color.RED_LIGHT
      : variant === "primary" && isActive
      ? theme.color.GREEN_LIGHT
      : theme.color.GRAY_600};
  border-width: 1px;
  border-color: ${({ theme, variant, isActive }) =>
    variant === "secondary" && isActive
      ? theme.color.RED_DARK
      : variant === "primary" && isActive
      ? theme.color.GREEN_DARK
      : theme.color.GRAY_600};
`;

export const Circle = styled(CircleIcon).attrs<ButtonVariant>({
  size: 8,
  weight: "fill",
})`
  color: ${({ theme, variant }) =>
    variant === "secondary" ? theme.color.RED_DARK : theme.color.GREEN_DARK};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.SM};
  color: ${({ theme }) => theme.color.GRAY_100};
`;
