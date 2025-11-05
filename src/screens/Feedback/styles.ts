import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerProps {
  withinTheDiet: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 40px 24px;
  justify-content: center;
`;

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

export const Title = styled.Text<ContainerProps>`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.XL}px;
  color: ${({ theme, withinTheDiet }) =>
    withinTheDiet ? theme.color.GREEN_DARK : theme.color.RED_DARK};
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_REGULAR};
  font-size: ${({ theme }) => theme.size.NM}px;
  color: ${({ theme }) => theme.color.GRAY_100};
  text-align: center;
`;

export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.NM}px;
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const Illustration = styled.Image.attrs<ContainerProps>(
  ({ withinTheDiet }) => ({
    source: withinTheDiet
      ? require("../../../assets/feedback-sucess.png")
      : require("../../../assets/feedback-failed.png"),
  })
)``;
