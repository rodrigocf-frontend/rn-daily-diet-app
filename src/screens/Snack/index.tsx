import {
  ButtonsContainer,
  TitleContainer,
  Pen,
  Row,
  Title,
  Trash,
  Value,
  Wrapper,
  Container,
} from "./styles";

import {
  StaticScreenProps,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";

import { useTheme } from "styled-components/native";
import { Chip } from "@/components/Chip";
import { setSnackScreenOptions } from "@/utils/header-options";
import { Paper } from "@/components/Paper";
import { Button } from "@/components/Button";
import { type Snack } from "@/store/DailyContext";
import { format } from "date-fns";

export type SnackScreenParams = Snack;

type Props = StaticScreenProps<SnackScreenParams>;

export function SnackScreen({ route }: Props) {
  const { withinTheDiet, name, description, date, id } = route.params;

  const navigation = useNavigation();
  const theme = useTheme();

  useFocusEffect(() => {
    navigation.setOptions(setSnackScreenOptions({ withinTheDiet, theme }));
  });

  const chipHasWithinDiet = withinTheDiet ? (
    <Chip value>Dentro da dieta</Chip>
  ) : (
    <Chip>Fora da dieta</Chip>
  );

  return (
    <Paper>
      <Container>
        <TitleContainer>
          <Row>
            <Title isSnackName>{name}</Title>
            <Value>{description}</Value>
          </Row>
          <Row>
            <Title>Data e hora</Title>
            <Value>{format(date, "dd/MM/yyyy 'às' HH:mm")}</Value>
          </Row>
          <Row>
            <Wrapper>{chipHasWithinDiet}</Wrapper>
          </Row>
        </TitleContainer>
        <ButtonsContainer>
          <Button IconComponent={Pen} variant="contained">
            Editar refeição
          </Button>
          <Button IconComponent={Trash} variant="outlined">
            Excluir refeição
          </Button>
        </ButtonsContainer>
      </Container>
    </Paper>
  );
}
