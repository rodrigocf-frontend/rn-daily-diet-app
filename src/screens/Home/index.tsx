import { Button } from "@/components/Button";
import { Container, Plus } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { setHomeScreenOptions } from "@/utils/header-options";

export function Home() {
  const navigation = useNavigation();

  useFocusEffect(() => {
    navigation.setOptions(setHomeScreenOptions());
  });

  return (
    <Container>
      <Button
        onPress={() => navigation.navigate("Feedback", { withinTheDiet: true })}
        IconComponent={Plus}
        variant="outlined"
      >
        Feedback success
      </Button>
      <Button
        onPress={() =>
          navigation.navigate("Feedback", { withinTheDiet: false })
        }
        IconComponent={Plus}
        variant="outlined"
      >
        Feedback failed
      </Button>
      <Button
        onPress={() => navigation.navigate("NewSnack")}
        IconComponent={Plus}
        variant="outlined"
      >
        New Snack
      </Button>
      <Button
        onPress={() => navigation.navigate("Snack", { withinTheDiet: true })}
        IconComponent={Plus}
        variant="outlined"
      >
        Snack within Diet
      </Button>

      <Button
        onPress={() => navigation.navigate("Snack", { withinTheDiet: false })}
        IconComponent={Plus}
        variant="outlined"
      >
        Snack without Diet
      </Button>
      <Button
        onPress={() =>
          navigation.navigate("Statistics", {
            withinTheDiet: true,
          })
        }
        IconComponent={Plus}
        variant="outlined"
      >
        Statistics Valid
      </Button>
      <Button
        onPress={() =>
          navigation.navigate("Statistics", {
            withinTheDiet: false,
          })
        }
        IconComponent={Plus}
        variant="outlined"
      >
        Statistics invalid
      </Button>
    </Container>
  );
}
