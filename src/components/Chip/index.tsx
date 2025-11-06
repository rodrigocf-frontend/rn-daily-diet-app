import { TouchableOpacityProps } from "react-native";
import { Container, Title, Circle, ChipVariant } from "./styles";

type Props = TouchableOpacityProps & ChipVariant;

export function Chip({ children, value = false, ...args }: Props) {
  return (
    <Container {...args}>
      <Circle value={value} />
      <Title>{children}</Title>
    </Container>
  );
}
