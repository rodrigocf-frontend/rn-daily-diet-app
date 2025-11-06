import {
  ButtonsContainer,
  Container,
  Pen,
  Row,
  Title,
  Trash,
  Value,
  Wrapper,
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

export type SnackScreenParams = {
  withinTheDiet: boolean;
};

type Props = StaticScreenProps<SnackScreenParams>;

export function Snack({ route }: Props) {
  const { withinTheDiet } = route.params;

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
        <Row>
          <Title isSnackName>X-tudo</Title>
          <Value>Xis completo da lancheria do bairro</Value>
        </Row>
        <Row>
          <Title>Data e hora</Title>
          <Value>12/08/2022 às 20:00</Value>
        </Row>
        <Row>
          <Wrapper>{chipHasWithinDiet}</Wrapper>
        </Row>
      </Container>
      <ButtonsContainer>
        <Button IconComponent={Pen} variant="contained">
          Editar refeição
        </Button>
        <Button IconComponent={Trash} variant="outlined">
          Excluir refeição
        </Button>
      </ButtonsContainer>
    </Paper>
  );
}
