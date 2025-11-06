import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 0 20px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.SM}px;
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const Column = styled.View`
  gap: 10px;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.XL}px;
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const CardSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_REGULAR};
  font-size: ${({ theme }) => theme.size.SM}px;
  color: ${({ theme }) => theme.color.GRAY_200};
  text-align: center;
`;
