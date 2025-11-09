import { Button } from "@/components/Button";
import {
  Arrow,
  ArrowButton,
  ButtonContainer,
  CardContainer,
  Container,
  ListContainer,
  ListTitle,
  Plus,
  Title,
} from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { setHomeScreenOptions } from "@/utils/header-options";
import { Card } from "@/components/Card";
import { SnackPercent } from "@/components/SnackPercent";
import { SectionList } from "react-native";
import { format } from "date-fns";
import { use } from "react";
import _ from "lodash";
import { SnackItem } from "@/components/SnackItem";
import { DailyContext, Snack } from "@/store/DailyContext";
import { useDiet } from "@/hooks/useDiet";
import { useTheme } from "styled-components/native";

export function Home() {
  const navigation = useNavigation();
  const theme = useTheme();

  const { dailies, snacks } = use(DailyContext);
  const { isGoodDiet, countTotalSnacks } = useDiet();

  useFocusEffect(() => {
    navigation.setOptions(setHomeScreenOptions());
  });

  const sections = _.map(dailies, (day) => ({
    ...day,
    data: _.orderBy(_.filter(snacks, { dailyId: day.id }), ["date"], ["desc"]),
  }));

  const orderedSections = _.orderBy(sections, ["date"], ["desc"]);

  const cardColor =
    countTotalSnacks === 0
      ? "GREEN_LIGHT"
      : isGoodDiet
      ? "GREEN_LIGHT"
      : "RED_LIGHT";

  const arrowColor =
    countTotalSnacks === 0
      ? theme.color.GREEN_DARK
      : isGoodDiet
      ? theme.color.GREEN_DARK
      : theme.color.RED_DARK;

  return (
    <Container>
      <CardContainer>
        <Card bgColor={cardColor}>
          <SnackPercent />
          <ArrowButton onPress={() => navigation.navigate("Statistics")}>
            <Arrow color={arrowColor} />
          </ArrowButton>
        </Card>
      </CardContainer>

      <ButtonContainer>
        <Title>Refeições</Title>
        <Button
          onPress={() => navigation.navigate("NewSnack", { isEditing: false })}
          IconComponent={Plus}
          variant="contained"
        >
          Nova refeição
        </Button>
      </ButtonContainer>

      <ListContainer>
        <SectionList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
          }}
          sections={orderedSections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SnackItem data={item} />}
          renderSectionHeader={({ section }) => (
            <ListTitle>{format(section.date, "dd.MM.yyyy")}</ListTitle>
          )}
        />
      </ListContainer>
    </Container>
  );
}
