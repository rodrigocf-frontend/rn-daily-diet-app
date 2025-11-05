import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 0 40px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size["2XL"]}px;
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_REGULAR};
  font-size: ${({ theme }) => theme.size.SM}px;
  color: ${({ theme }) => theme.color.GRAY_200};
`;
