import { use } from "react";
import { Container, Subtitle, Title } from "./styles";
import { DailyContext } from "@/store/DailyContext";
import {
  countOutsideTheDiet,
  countSnacks,
  countWithinTheDiet,
} from "@/utils/snack-helpers";

export function SnackPercent() {
  const { dailies } = use(DailyContext);

  const totalSnacks = dailies.reduce(
    (total, day) => total + countSnacks(day.data),
    0
  );

  const totalWithinTheDiet = dailies.reduce(
    (total, day) => total + countWithinTheDiet(day.data),
    0
  );

  const percentWithinTheDiet = totalWithinTheDiet / totalSnacks;

  const title =
    percentWithinTheDiet >= 0
      ? `${(percentWithinTheDiet * 100).toFixed(2)}%`
      : "Sem refeições";
  const subtitle =
    percentWithinTheDiet >= 0
      ? `das refeições dentro da dieta`
      : "ainda não há refeições cadastradas";

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
