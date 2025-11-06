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
import { useState } from "react";
import _ from "lodash";
import { SnackItem } from "@/components/SnackItem";

type Daily = {
  id: string;
  date: string;
  data: Snack[];
};

export type Snack = {
  id: string;
  name: string;
  description: string;
  withinTheDiet: boolean;
  date: string;
};

type State = {
  lastSnackId: number;
  lastDailyId: number;
  dailies: Daily[];
};

export function Home() {
  const navigation = useNavigation();
  const [state, setState] = useState<State>({
    lastDailyId: 1,
    lastSnackId: 1,
    dailies: [],
  });

  useFocusEffect(() => {
    navigation.setOptions(setHomeScreenOptions());
  });

  const onPress = (newDate: Date) => {
    const dateExist = state.dailies.filter((day) =>
      isSameDay(day.date, newDate)
    );

    if (dateExist.length > 0) {
      return setState((prevState) => ({
        ...prevState,
        dailies: _.map(prevState.dailies, (daily) => {
          if (dateExist[0].id === daily.id) {
            return {
              ...daily,
              data: [
                {
                  id: (prevState.lastSnackId + 1).toString(),
                  name: "Paçoca",
                  description: "string",
                  withinTheDiet: true,
                  date: "string",
                },
                ...daily.data,
              ],
            };
          }
          return daily;
        }),
        lastSnackId: prevState.lastSnackId + 1,
      }));
    }

    setState((prevState) => ({
      ...prevState,
      dailies: [
        {
          id: (prevState.lastDailyId + 1).toString(),
          date: new TZDate().toISOString(),
          data: [
            {
              id: (prevState.lastSnackId + 1).toString(),
              name: "Paçoca",
              description: "string",
              withinTheDiet: true,
              date: "string",
            },
          ],
        },
        ...prevState.dailies,
      ],
      lastSnackId: prevState.lastSnackId + 1,
      lastDailyId: prevState.lastDailyId + 1,
    }));
  };

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
          onPress={() => onPress(new Date())}
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
          sections={state.dailies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SnackItem data={item} />}
          renderSectionHeader={({ section }) => (
            <ListTitle>
              {format(new Date(section.date), "dd.MM.yyyy")}
            </ListTitle>
          )}
        />
      </ListContainer>
    </Container>
  );
}
