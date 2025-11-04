import { TouchableOpacityProps } from "react-native";
import { Container, Title, Circle, ButtonVariant } from "./styles";

type Props = TouchableOpacityProps & ButtonVariant;

export function ButtonSelect({
  children,
  variant = "primary",
  ...args
}: Props) {
  return (
    <Container variant={variant} {...args}>
      <Circle variant={variant} />
      <Title>{children}</Title>
    </Container>
  );
}
