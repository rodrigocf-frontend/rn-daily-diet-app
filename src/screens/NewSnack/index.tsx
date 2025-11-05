import { Button } from "@/components/Button";
import { Container, Plus } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { setNewSnackScreenOptions } from "@/utils/header-options";
import { useTheme } from "styled-components/native";

export function NewSnack() {
  const navigation = useNavigation();
  const theme = useTheme();

  useFocusEffect(() => {
    navigation.setOptions(setNewSnackScreenOptions({ theme }));
  });

  return (
    <Container>
      <Button IconComponent={Plus} variant="outlined">
        New Snack
      </Button>
    </Container>
  );
}
