import { Button } from "@/components/Button";
import {
  Container,
  Illustration,
  Strong,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";
import {
  StaticScreenProps,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { setFeedbackScreenOptions } from "@/utils/header-options";

export type FeedbackScreenParams = {
  withinTheDiet: boolean;
};

type Props = StaticScreenProps<FeedbackScreenParams>;

export function Feedback({ route }: Props) {
  const navigation = useNavigation();
  const { withinTheDiet } = route.params;

  useFocusEffect(() => {
    navigation.setOptions(setFeedbackScreenOptions());
  });

  const title = withinTheDiet ? "Continue assim!" : "Que pena!";
  const subtitle = withinTheDiet ? (
    <Subtitle>
      Você continua<Strong> dentro da dieta.</Strong> Muito bem!
    </Subtitle>
  ) : (
    <Subtitle>
      Você<Strong> saiu da dieta</Strong> dessa vez, mas continue se esforçando
      e não desista!
    </Subtitle>
  );

  return (
    <Container>
      <Wrapper>
        <Title withinTheDiet={withinTheDiet}>{title}</Title>
        {subtitle}
        <Illustration withinTheDiet={withinTheDiet} />

        <Button variant="contained" onPress={() => navigation.navigate("Home")}>
          Ir para a página inicial
        </Button>
      </Wrapper>
    </Container>
  );
}
