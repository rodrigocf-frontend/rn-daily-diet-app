import { Container, Subtitle, Title } from "./styles";
import _ from "lodash";
import { useDiet } from "@/hooks/useDiet";

export function SnackPercent() {
  const { percentWithinTheDiet } = useDiet();

  const title =
    percentWithinTheDiet >= 0
      ? `${(percentWithinTheDiet * 100).toFixed(2)}%`
      : "0%";

  const subtitle =
    percentWithinTheDiet >= 0
      ? `das refeições dentro da dieta`
      : "ainda não há refeições na dieta";

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
