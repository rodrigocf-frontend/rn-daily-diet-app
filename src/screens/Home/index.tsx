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
import { SectionList, View } from "react-native";
import { TZDate } from "@date-fns/tz";
import { addHours, format, isEqual, isSameDay } from "date-fns";
import { use, useState } from "react";
import _ from "lodash";
import { SnackItem } from "@/components/SnackItem";
import { DailyContext } from "@/store/DailyContext";

export function Home() {
  const navigation = useNavigation();

  const { dailies } = use(DailyContext);

  useFocusEffect(() => {
    navigation.setOptions(setHomeScreenOptions());
  });

  return (
    <Container>
      <CardContainer>
        <Card bgColor="GREEN_LIGHT">
          <SnackPercent />
          <ArrowButton
            onPress={() =>
              navigation.navigate("Statistics", { withinTheDiet: true })
            }
          >
            <Arrow />
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
          sections={dailies}
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
