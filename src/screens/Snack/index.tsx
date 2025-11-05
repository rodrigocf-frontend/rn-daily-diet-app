import { Button } from "@/components/Button";
import { Container, Plus } from "./styles";

import {
  StaticScreenProps,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { setSnackScreenOptions } from "@/utils/header-options";
import { useTheme } from "styled-components/native";

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

  return (
    <Container>
      <Button IconComponent={Plus} variant="outlined">
        Snack
      </Button>
    </Container>
  );
}
