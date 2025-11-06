import { CircleIcon } from "phosphor-react-native";
import styled from "styled-components/native";

export type SnackVariant = {
  withinTheDiet: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.GRAY_500};
  border-radius: 6px;
  padding: 14px 16px 14px 12px;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Divider = styled.View`
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.color.GRAY_400};
  align-self: stretch;
`;

export const Hour = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.XSM}px;
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_REGULAR};
  font-size: ${({ theme }) => theme.size.NM}px;
  color: ${({ theme }) => theme.color.GRAY_200};
`;

export const Circle = styled(CircleIcon).attrs<SnackVariant>({
  size: 14,
  weight: "fill",
})`
  color: ${({ theme, withinTheDiet }) =>
    !withinTheDiet ? theme.color.RED_DARK : theme.color.GREEN_DARK};
`;
