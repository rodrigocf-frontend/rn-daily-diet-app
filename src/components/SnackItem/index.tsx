import { Snack } from "@/store/DailyContext";
import { Circle, Container, Divider, Hour, Name, Wrapper } from "./styles";

type Props = {
  data: Snack;
};

export function SnackItem({ data }: Props) {
  const { withinTheDiet } = data;

  return (
    <Container>
      <Wrapper>
        <Hour>20:00</Hour>
        <Divider />
        <Name>X-tudo</Name>
      </Wrapper>
      <Circle withinTheDiet={withinTheDiet} />
    </Container>
  );
}
