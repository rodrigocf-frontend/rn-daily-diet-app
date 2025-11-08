import { Snack } from "@/store/DailyContext";
import { Circle, Container, Divider, Hour, Name, Wrapper } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

type Props = {
  data: Snack;
};

export function SnackItem({ data }: Props) {
  const { withinTheDiet, date, name } = data;
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("Snack", data)}>
      <Wrapper>
        <Hour>{format(date, "HH:mm")}</Hour>
        <Divider />
        <Name>{name}</Name>
      </Wrapper>
      <Circle withinTheDiet={withinTheDiet} />
    </Container>
  );
}
