import { CircleIcon } from "phosphor-react-native";
import styled from "styled-components/native";

export type ChipVariant = {
  value?: boolean;
};

export const Container = styled.View`
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  background-color: ${({ theme }) => theme.color.GRAY_600};
  padding: 8px 16px;
`;

export const Circle = styled(CircleIcon).attrs<ChipVariant>({
  size: 8,
  weight: "fill",
})`
  color: ${({ theme, value }) =>
    value ? theme.color.GREEN_DARK : theme.color.RED_DARK};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_REGULAR};
  font-size: ${({ theme }) => theme.size.SM}px;
  color: ${({ theme }) => theme.color.GRAY_100};
`;
