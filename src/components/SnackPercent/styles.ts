import { ArrowDownRightIcon } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: 0 auto;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size["2XL"]}px;
  color: ${({ theme }) => theme.color.GRAY_100};
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_REGULAR};
  font-size: ${({ theme }) => theme.size.SM}px;
  color: ${({ theme }) => theme.color.GRAY_200};
  text-align: center;
`;
