import { Column, Container, Label, MultextInput, Row, Wrapper } from "./styles";
import {
  StackActions,
  StaticScreenProps,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Paper } from "@/components/Paper";
import { TextField } from "@/components/TextField";
import { setNewSnackScreenOptions } from "@/utils/header-options";
import { ButtonSelect } from "@/components/ButtonSelect";
import { Button } from "@/components/Button";

export type NewSnackScreenParams = {
  isEditing?: boolean;
};

type Props = StaticScreenProps<NewSnackScreenParams>;

export function NewSnack({ route }: Props) {
  const navigation = useNavigation();
  const theme = useTheme();
  const { isEditing } = route.params;

  useFocusEffect(() => {
    navigation.setOptions(setNewSnackScreenOptions({ theme, isEditing }));
  });

  return (
    <Container>
      <Paper>
        <Wrapper>
          <Row>
            <TextField label="Nome" />
          </Row>
          <Row>
            <MultextInput label="Descrição" multiline />
          </Row>
          <Row>
            <TextField label="Data" />
            <TextField label="Hora" />
          </Row>
          <Column>
            <Label>Está dentro da dieta?</Label>
            <Row>
              <ButtonSelect variant="primary">Sim</ButtonSelect>
              <ButtonSelect variant="secondary">Não</ButtonSelect>
            </Row>
          </Column>
          <Button
            variant="contained"
            onPress={() => {
              navigation.dispatch(
                StackActions.replace("Feedback", { withinTheDiet: true })
              );
            }}
          >
            Cadastrar refeição
          </Button>
        </Wrapper>
      </Paper>
    </Container>
  );
}
