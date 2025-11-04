import { Button } from "@/components/Button";
import { Container, Plus } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Button
        onPress={() => navigation.navigate("Feedback")}
        IconComponent={Plus}
        variant="outlined"
      >
        Feedback
      </Button>
      <Button
        onPress={() => navigation.navigate("NewSnack")}
        IconComponent={Plus}
        variant="outlined"
      >
        New Snack
      </Button>
      <Button
        onPress={() => navigation.navigate("Snack")}
        IconComponent={Plus}
        variant="outlined"
      >
        Snack
      </Button>
      <Button
        onPress={() => navigation.navigate("Statistics")}
        IconComponent={Plus}
        variant="outlined"
      >
        Statistics
      </Button>
    </Container>
  );
}
