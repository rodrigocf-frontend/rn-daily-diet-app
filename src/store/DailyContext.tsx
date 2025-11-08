import { SnackSchema } from "@/models/create-snack";
import { createReferenceDate } from "@/utils/moment-formatters";
import { TZDate } from "@date-fns/tz";
import { isSameDay } from "date-fns";
import _ from "lodash";
import { PropsWithChildren, createContext, useState } from "react";

export type Snack = {
  id: string;
  name: string;
  description: string;
  withinTheDiet: boolean;
  date: string;
  dailyId: string;
};

export type Daily = {
  id: string;
  date: string;
};

type StateData = {
  lastSnackId: number;
  lastDailyId: number;
  dailies: Daily[];
  snacks: Snack[];
};

type StateHandlers = {
  addSnack: (snack: SnackSchema) => void;
};

const initialData: StateData = {
  lastDailyId: 1,
  lastSnackId: 1,
  dailies: [],
  snacks: [],
};

const stateHandlers: StateHandlers = {
  addSnack: (snack: SnackSchema) => {},
};

export const DailyContext = createContext({
  ...initialData,
  ...stateHandlers,
});

export function DailyProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<StateData>(initialData);

  const addSnack = (snack: SnackSchema) => {
    const dateReference = createReferenceDate({
      date: snack.date,
      hour: "00:00",
    });

    const dateSnackReference = createReferenceDate({
      date: snack.date,
      hour: snack.hour,
    });

    const dateExist = state.dailies.filter((day) =>
      isSameDay(day.date, dateReference.toISOString())
    );

    if (dateExist.length > 0) {
      return setState((prevState) => ({
        ...prevState,
        dailies: _.orderBy(
          _.map(prevState.dailies, (daily) => {
            if (dateExist[0].id === daily.id) {
              return {
                ...daily,
              };
            }
            return daily;
          }),
          ["date"],
          ["desc"]
        ),
        lastSnackId: prevState.lastSnackId + 1,
        snacks: [
          {
            dailyId: dateExist[0].id,
            date: new TZDate(dateSnackReference).toISOString(),
            name: snack.name,
            description: snack.description,
            id: (prevState.lastSnackId + 1).toString(),
            withinTheDiet: snack.withinTheDiet,
          },
          ...prevState.snacks,
        ],
      }));
    }
    setState((prevState) => ({
      ...prevState,
      dailies: _.orderBy(
        [
          {
            id: (prevState.lastDailyId + 1).toString(),
            date: new TZDate(dateReference).toISOString(),
            data: [
              {
                id: (prevState.lastSnackId + 1).toString(),
                name: snack.name,
                description: snack.description,
                withinTheDiet: snack.withinTheDiet,
                date: new TZDate(dateSnackReference).toISOString(),
              },
            ],
          },
          ...prevState.dailies,
        ],
        ["date"],
        ["desc"]
      ),
      snacks: [
        {
          dailyId: (prevState.lastDailyId + 1).toString(),
          date: new TZDate(dateSnackReference).toISOString(),
          name: snack.name,
          description: snack.description,
          id: (prevState.lastSnackId + 1).toString(),
          withinTheDiet: snack.withinTheDiet,
        },
        ...prevState.snacks,
      ],
      lastSnackId: prevState.lastSnackId + 1,
      lastDailyId: prevState.lastDailyId + 1,
    }));
  };

  const updateStack = (snack: Snack) => {};

  const deleteSnack = (snack: Snack) => {};

  return (
    <DailyContext.Provider
      value={{
        ...state,
        addSnack,
      }}
    >
      {children}
    </DailyContext.Provider>
  );
}
