import styled from "styled-components/native";

export const Container = styled.View`
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.color.WHITE};
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
