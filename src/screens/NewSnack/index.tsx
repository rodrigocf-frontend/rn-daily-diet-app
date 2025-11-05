import { Column, Container, Label, Row, Wrapper } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Paper } from "@/components/Paper";
import { TextField } from "@/components/TextField";
import { setNewSnackScreenOptions } from "@/utils/header-options";
import { ButtonSelect } from "@/components/ButtonSelect";
import { Button } from "@/components/Button";

export function NewSnack() {
  const navigation = useNavigation();
  const theme = useTheme();

  useFocusEffect(() => {
    navigation.setOptions(setNewSnackScreenOptions({ theme }));
  });

  return (
    <Container>
      <Paper>
        <Wrapper>
          <Row>
            <TextField label="Nome" />
          </Row>
          <Row>
            <TextField label="Descrição" />
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
          <Button variant="contained">Cadastrar refeição</Button>
        </Wrapper>
      </Paper>
    </Container>
  );
}
