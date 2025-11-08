import {
  CardBody,
  CardSubtitle,
  CardTitle,
  Container,
  Row,
  SnackPercentContainer,
  Title,
  TitleContainer,
} from "./styles";
import {
  StaticScreenProps,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { SnackPercent } from "@/components/SnackPercent";
import { setStatisticsScreenOptions } from "@/utils/header-options";
import { Paper } from "@/components/Paper";
import { Card } from "@/components/Card";
import { DailyContext } from "@/store/DailyContext";
import { use } from "react";
import _ from "lodash";
import {
  countOutsideTheDiet,
  countSnacks,
  countWithinTheDiet,
  getBestSequence,
  isGoodDiet,
} from "@/utils/snack-helpers";

export function Statistics() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { dailies, snacks } = use(DailyContext);

  const snacksCount = _.countBy(snacks, { withinTheDiet: true });

  const totalSnacks = _.size(snacks);

  const totalWithinTheDiet = _.get(snacksCount, "true");

  const totalOutsideTheDiet = _.get(snacksCount, "false");

  const percentWithinTheDiet = totalWithinTheDiet / totalSnacks;

  const hasGoodDiet = isGoodDiet(percentWithinTheDiet);

  const bestSequence = getBestSequence(snacks);

  useFocusEffect(() => {
    navigation.setOptions(setStatisticsScreenOptions({ hasGoodDiet, theme }));
  });

  return (
    <Container>
      <SnackPercentContainer>
        <SnackPercent />
      </SnackPercentContainer>
      <Paper>
        <TitleContainer>
          <Title>Estatísticas gerais</Title>
        </TitleContainer>

        <Row>
          <Card>
            <CardBody>
              <CardTitle>{bestSequence}</CardTitle>
              <CardSubtitle>
                melhor sequência de pratos dentro da dieta
              </CardSubtitle>
            </CardBody>
          </Card>
        </Row>

        <Row>
          <Card>
            <CardBody>
              <CardTitle>{totalSnacks}</CardTitle>
              <CardSubtitle>refeições registradas</CardSubtitle>
            </CardBody>
          </Card>
        </Row>

        <Row>
          <Card bgColor="GREEN_LIGHT">
            <CardBody>
              <CardTitle>{totalWithinTheDiet}</CardTitle>
              <CardSubtitle>refeições dentro da dieta</CardSubtitle>
            </CardBody>
          </Card>
          <Card bgColor="RED_LIGHT">
            <CardBody>
              <CardTitle>{totalOutsideTheDiet}</CardTitle>
              <CardSubtitle>refeições fora da dieta</CardSubtitle>
            </CardBody>
          </Card>
        </Row>
      </Paper>
    </Container>
  );
}
