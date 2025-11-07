import { Column, Container, Label, MultextInput, Row, Wrapper } from "./styles";
import {
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
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SnackSchema, snackSchema } from "@/models/create-snack";
import {
  formatDate,
  formatHour,
  validateDateTime,
} from "@/utils/moment-formatters";
import { Alert } from "react-native";
import { use } from "react";
import { DailyContext } from "@/store/DailyContext";

export type NewSnackScreenParams = {
  isEditing?: boolean;
};

type Props = StaticScreenProps<NewSnackScreenParams>;

export function NewSnack({ route }: Props) {
  const navigation = useNavigation();
  const { addSnack } = use(DailyContext);
  const theme = useTheme();
  const { isEditing } = route.params;
  const { setValue, handleSubmit, control, watch } = useForm({
    values: {
      date: "",
      hour: "",
      name: "",
      description: "",
      withinTheDiet: false,
    },
    resolver: zodResolver(snackSchema),
  });

  const withinTheDiet = watch("withinTheDiet");

  const submitHandler = (data: SnackSchema) => {
    const isValidDate = validateDateTime({ date: data.date, hour: data.hour });

    if (!isValidDate) {
      return Alert.alert(
        "Inválido",
        "Formato de data/hora fornecidos inválido."
      );
    }
    addSnack(data);
  };

  const onSubmitErrorHandler: SubmitErrorHandler<SnackSchema> = ({
    date,
    hour,
    name,
    description,
  }) => {
    const messageDate = date?.message;
    const messageName = name?.message;
    const messageHour = hour?.message;
    const messageDescription = description?.message;

    let subtitle = "Os seguintes campos estão incorretos: ";

    if (messageName) {
      subtitle = subtitle.concat(messageName);
    }
    if (messageDescription) {
      subtitle = subtitle.concat(messageDescription);
    }
    if (messageDate) {
      subtitle = subtitle.concat(messageDate);
    }
    if (messageHour) {
      subtitle = subtitle.concat(messageHour);
    }

    return Alert.alert("Inválido", subtitle);
  };

  const onChangeSelect = (value: boolean) => setValue("withinTheDiet", value);

  useFocusEffect(() => {
    navigation.setOptions(setNewSnackScreenOptions({ theme, isEditing }));
  });

  return (
    <Container>
      <Paper>
        <Wrapper>
          <Row>
            <TextField label="Nome" control={control} name="name" />
          </Row>
          <Row>
            <MultextInput
              label="Descrição"
              multiline
              control={control}
              name="description"
            />
          </Row>
          <Row>
            <TextField
              label="Data"
              control={control}
              name="date"
              formmater={formatDate}
              maxLength={10}
              placeholder="14/09/1993"
            />
            <TextField
              label="Hora"
              control={control}
              name="hour"
              formmater={formatHour}
              maxLength={5}
              placeholder="00:00"
            />
          </Row>
          <Column>
            <Label>Está dentro da dieta?</Label>
            <Row>
              <ButtonSelect
                isActive={withinTheDiet}
                variant="primary"
                onPress={() => onChangeSelect(true)}
              >
                Sim
              </ButtonSelect>
              <ButtonSelect
                isActive={!withinTheDiet}
                variant="secondary"
                onPress={() => onChangeSelect(false)}
              >
                Não
              </ButtonSelect>
            </Row>
          </Column>
          <Button
            variant="contained"
            onPress={handleSubmit(submitHandler, onSubmitErrorHandler)}
          >
            Cadastrar refeição
          </Button>
        </Wrapper>
      </Paper>
    </Container>
  );
}
