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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { SnackPercent } from "@/components/SnackPercent";
import { setStatisticsScreenOptions } from "@/utils/header-options";
import { Paper } from "@/components/Paper";
import { Card } from "@/components/Card";
import _ from "lodash";
import { useDiet } from "@/hooks/useDiet";

export function Statistics() {
  const theme = useTheme();
  const navigation = useNavigation();
  const {
    countInTheDiet,
    countOutTheDiet,
    countTotalSnacks,
    isGoodDiet,
    countBestSequence,
  } = useDiet();

  useFocusEffect(() => {
    navigation.setOptions(
      setStatisticsScreenOptions({ isGoodDiet, countTotalSnacks, theme })
    );
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
              <CardTitle>{countBestSequence}</CardTitle>
              <CardSubtitle>
                melhor sequência de pratos dentro da dieta
              </CardSubtitle>
            </CardBody>
          </Card>
        </Row>

        <Row>
          <Card>
            <CardBody>
              <CardTitle>{countTotalSnacks}</CardTitle>
              <CardSubtitle>refeições registradas</CardSubtitle>
            </CardBody>
          </Card>
        </Row>

        <Row>
          <Card bgColor="GREEN_LIGHT">
            <CardBody>
              <CardTitle>{countInTheDiet}</CardTitle>
              <CardSubtitle>refeições dentro da dieta</CardSubtitle>
            </CardBody>
          </Card>
          <Card bgColor="RED_LIGHT">
            <CardBody>
              <CardTitle>{countOutTheDiet}</CardTitle>
              <CardSubtitle>refeições fora da dieta</CardSubtitle>
            </CardBody>
          </Card>
        </Row>
      </Paper>
    </Container>
  );
}
