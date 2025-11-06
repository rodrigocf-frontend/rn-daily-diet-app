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

export type StatisticsScreenProps = {
  withinTheDiet: boolean;
};

type Props = StaticScreenProps<StatisticsScreenProps>;

export function Statistics({ route }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();
  const { withinTheDiet } = route.params;

  useFocusEffect(() => {
    navigation.setOptions(setStatisticsScreenOptions({ withinTheDiet, theme }));
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
              <CardTitle>22</CardTitle>
              <CardSubtitle>
                melhor sequência de pratos dentro da dieta
              </CardSubtitle>
            </CardBody>
          </Card>
        </Row>

        <Row>
          <Card>
            <CardBody>
              <CardTitle>109</CardTitle>
              <CardSubtitle>refeições registradas</CardSubtitle>
            </CardBody>
          </Card>
        </Row>

        <Row>
          <Card bgColor="GREEN_LIGHT">
            <CardBody>
              <CardTitle>99</CardTitle>
              <CardSubtitle>refeições dentro da dieta</CardSubtitle>
            </CardBody>
          </Card>
          <Card bgColor="RED_LIGHT">
            <CardBody>
              <CardTitle>10</CardTitle>
              <CardSubtitle>refeições fora da dieta</CardSubtitle>
            </CardBody>
          </Card>
        </Row>
      </Paper>
    </Container>
  );
}
