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
import { useDiet } from "@/hooks/useDiet";

export type FeedbackScreenParams = {
  withinTheDiet: boolean;
};

type Props = StaticScreenProps<FeedbackScreenParams>;

export function Feedback({ route }: Props) {
  const navigation = useNavigation();
  const { isGoodDiet } = useDiet();

  useFocusEffect(() => {
    navigation.setOptions(setFeedbackScreenOptions());
  });

  const title = isGoodDiet ? "Continue assim!" : "Que pena!";
  const subtitle = isGoodDiet ? (
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
        <Title isGoodDiet={isGoodDiet}>{title}</Title>
        {subtitle}
        <Illustration isGoodDiet={isGoodDiet} />

        <Button variant="contained" onPress={() => navigation.navigate("Home")}>
          Ir para a página inicial
        </Button>
      </Wrapper>
    </Container>
  );
}
