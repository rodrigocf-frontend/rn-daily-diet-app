import styled from "styled-components/native";
import { ArrowDownRightIcon, PlusIcon } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Plus = styled(PlusIcon).attrs(({ theme }) => ({
  size: 18,
  color: theme.color.WHITE,
}))``;

export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const ArrowButton = styled.TouchableOpacity`
  right: 0;
  top: 0;
  position: absolute;
  padding: 10px 10px;
`;

export const Arrow = styled(ArrowDownRightIcon).attrs(({ theme }) => ({
  color: theme.color.GREEN_DARK,
  size: 24,
}))`
  transform: rotate(-90deg);
`;

export const ButtonContainer = styled.View`
  gap: 5px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_REGULAR};
  font-size: ${({ theme }) => theme.size.NM}px;
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const ListTitle = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.LG}px;
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const ListContainer = styled.View`
  margin-top: 40px;
  flex: 1;
`;
