import {
  ButtonsContainer,
  TitleContainer,
  Pen,
  Row,
  Title,
  Trash,
  Value,
  WrapperModal,
  Container,
  ModalPaper,
  Wrapper,
  ModalTitle,
  ModalButtons,
} from "./styles";

import {
  StackActions,
  StaticScreenProps,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";

import { useTheme } from "styled-components/native";
import { Chip } from "@/components/Chip";
import { setSnackScreenOptions } from "@/utils/header-options";
import { Paper } from "@/components/Paper";
import { Button } from "@/components/Button";
import { DailyContext, type Snack } from "@/store/DailyContext";
import { format } from "date-fns";
import { use, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal, Text } from "react-native";

export type SnackScreenParams = Snack;

type Props = StaticScreenProps<SnackScreenParams>;

export function SnackScreen({ route }: Props) {
  const { withinTheDiet, name, description, date, id } = route.params;
  const { deleteSnack } = use(DailyContext);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const theme = useTheme();

  const handleDeleteSnack = () => {
    deleteSnack(route.params);
    navigation.goBack();
  };

  const handleEditSnack = () => {
    navigation.dispatch(
      StackActions.replace("NewSnack", { isEditing: true, snack: route.params })
    );
  };

  const handleModal = () => setModalVisible((prevState) => !prevState);

  useFocusEffect(() => {
    navigation.setOptions(setSnackScreenOptions({ withinTheDiet, theme }));
  });

  const chipHasWithinDiet = withinTheDiet ? (
    <Chip value>Dentro da dieta</Chip>
  ) : (
    <Chip>Fora da dieta</Chip>
  );

  return (
    <>
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
            <Button
              IconComponent={Pen}
              variant="contained"
              onPress={handleEditSnack}
            >
              Editar refeição
            </Button>
            <Button
              IconComponent={Trash}
              variant="outlined"
              onPress={handleModal}
            >
              Excluir refeição
            </Button>
          </ButtonsContainer>
        </Container>
      </Paper>
      <Modal
        animationType="fade"
        visible={modalVisible}
        backdropColor={"transparent"}
      >
        <WrapperModal>
          <ModalPaper>
            <ModalTitle>
              Deseja realmente excluir o registro da refeição?
            </ModalTitle>
            <ModalButtons>
              <Button variant="outlined" onPress={handleModal}>
                Cancelar
              </Button>
              <Button variant="contained" onPress={handleDeleteSnack}>
                Sim, excluir
              </Button>
            </ModalButtons>
          </ModalPaper>
        </WrapperModal>
      </Modal>
    </>
  );
}
