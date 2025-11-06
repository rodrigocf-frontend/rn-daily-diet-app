import { TouchableOpacityProps } from "react-native";
import { Container, VariantProps, Title } from "./styles";
import { IconProps } from "phosphor-react-native";
import { ComponentType } from "react";
import { DefaultTheme, useTheme } from "styled-components/native";

type Props = TouchableOpacityProps &
  VariantProps & {
    IconComponent?: ComponentType<IconProps>;
  };

export function Button({
  variant = "contained",
  children,
  IconComponent,
  ...args
}: Props) {
  return (
    <Container {...args} variant={variant}>
      {IconComponent && <IconComponent />}
      <Title variant={variant}>{children}</Title>
    </Container>
  );
}
