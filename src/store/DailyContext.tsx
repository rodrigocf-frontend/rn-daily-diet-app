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
};

type Daily = {
  id: string;
  date: string;
  data: Snack[];
};

type StateData = {
  lastSnackId: number;
  lastDailyId: number;
  dailies: Daily[];
};

type StateHandlers = {
  addSnack: (snack: SnackSchema) => void;
};

const initialData: StateData = {
  lastDailyId: 1,
  lastSnackId: 1,
  dailies: [],
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
    const dateTP = createReferenceDate({ date: snack.date, hour: snack.hour });

    const dateExist = state.dailies.filter((day) =>
      isSameDay(day.date, dateTP.toISOString())
    );

    if (dateExist.length > 0) {
      return setState((prevState) => ({
        ...prevState,
        dailies: _.orderBy(
          _.map(prevState.dailies, (daily) => {
            if (dateExist[0].id === daily.id) {
              return {
                ...daily,
                data: [
                  {
                    id: (prevState.lastSnackId + 1).toString(),
                    name: snack.name,
                    description: snack.description,
                    withinTheDiet: snack.withinTheDiet,
                    date: new TZDate(dateTP).toISOString(),
                  },
                  ...daily.data,
                ],
              };
            }
            return daily;
          }),
          ["date"],
          ["desc"]
        ),
        lastSnackId: prevState.lastSnackId + 1,
      }));
    }
    setState((prevState) => ({
      ...prevState,
      dailies: _.orderBy(
        [
          {
            id: (prevState.lastDailyId + 1).toString(),
            date: new TZDate(dateTP).toISOString(),
            data: [
              {
                id: (prevState.lastSnackId + 1).toString(),
                name: snack.name,
                description: snack.description,
                withinTheDiet: snack.withinTheDiet,
              },
            ],
          },
          ...prevState.dailies,
        ],
        ["date"],
        ["desc"]
      ),
      lastSnackId: prevState.lastSnackId + 1,
      lastDailyId: prevState.lastDailyId + 1,
    }));
  };

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
