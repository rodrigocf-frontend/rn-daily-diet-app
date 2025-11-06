import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextField } from "@/components/TextField";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  gap: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const Column = styled.View`
  gap: 4px;
  flex: 1;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.SM}px;
  color: ${({ theme }) => theme.color.GRAY_200};
`;

export const MultextInput = styled(TextField).attrs({
  textAlignVertical: "top",
  multiline: true,
})`
  min-height: 142px;
`;
