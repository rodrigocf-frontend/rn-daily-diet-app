import { PencilSimpleLineIcon, TrashIcon } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  flex: 4;
`;

interface TitleProps {
  isSnackName?: boolean;
}

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme, isSnackName }) =>
    isSnackName ? "20" : theme.size.SM}px;
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_REGULAR};
  font-size: ${({ theme }) => theme.size.NM}px;
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const Row = styled.View`
  gap: 5;
  margin-bottom: 20px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonsContainer = styled.View`
  gap: 10px;
  padding: 0 0 40px 0;
  flex: 1;
  justify-self: flex-end;
`;

export const Pen = styled(PencilSimpleLineIcon).attrs((theme) => ({
  size: 18,
}))`
  color: ${({ theme }) => theme.color.WHITE};
`;

export const Trash = styled(TrashIcon).attrs({
  size: 18,
})`
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const WrapperModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalPaper = styled.View`
  background-color: ${({ theme }) => theme.color.GRAY_700};
  gap: 32px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 21px;
  max-width: 327px;
`;

export const ModalTitle = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.LG}px;
  color: ${({ theme }) => theme.color.GRAY_200};
  text-align: center;
`;

export const ModalButtons = styled.View`
  flex-direction: row;
  gap: 12px;
`;
