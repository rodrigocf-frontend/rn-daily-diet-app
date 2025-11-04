import styled from "styled-components/native";

type InputProps = {
  isFocus: boolean;
};

export const Container = styled.View`
  gap: 4px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.SM};
  color: ${({ theme }) => theme.color.GRAY_200};
`;

export const Input = styled.TextInput<InputProps>`
  border-width: 1px;
  border-color: ${({ theme, isFocus }) =>
    isFocus ? theme.color.GRAY_100 : theme.color.GRAY_500};
  padding: 14px;
  color: ${({ theme }) => theme.color.GRAY_100};
  font-family: ${({ theme }) => theme.font.NUNITO_REGULAR};
  font-size: ${({ theme }) => theme.size.NM};
`;
