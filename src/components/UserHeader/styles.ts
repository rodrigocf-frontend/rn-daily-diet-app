import { ArrowDownRightIcon } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 24px;
`;

export const Brand = styled.Image.attrs({
  source: require("../../../assets/logo.png"),
})``;

export const User = styled.Image.attrs({
  source: require("../../../assets/user.png"),
})``;
