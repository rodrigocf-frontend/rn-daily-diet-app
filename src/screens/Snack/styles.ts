import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlusIcon } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
`;

export const Plus = styled(PlusIcon).attrs(({ theme }) => ({
  size: 18,
  color: theme.color.WHITE,
}))``;
