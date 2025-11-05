import {
  CardSubtitle,
  CardTitle,
  Column,
  Container,
  Row,
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
      <SnackPercent />
      <Paper>
        <TitleContainer>
          <Title>Estatísticas gerais</Title>
        </TitleContainer>
        <Column>
          <Row>
            <Card>
              <CardTitle>22</CardTitle>
              <CardSubtitle>
                melhor sequência de pratos dentro da dieta
              </CardSubtitle>
            </Card>
          </Row>
          <Row>
            <Card>
              <CardTitle>109</CardTitle>
              <CardSubtitle>refeições registradas</CardSubtitle>
            </Card>
          </Row>
          <Row>
            <Card bgColor="GREEN_LIGHT">
              <CardTitle>99</CardTitle>
              <CardSubtitle>refeições dentro da dieta</CardSubtitle>
            </Card>
            <Card bgColor="RED_LIGHT">
              <CardTitle>10</CardTitle>
              <CardSubtitle>refeições fora da dieta</CardSubtitle>
            </Card>
          </Row>
        </Column>
      </Paper>
    </Container>
  );
}
