import { SnackSchema } from "@/models/create-snack";
import { getDailies, setDailies } from "@/services/daily";
import { getSnacks, setSnacks } from "@/services/snacks";
import { AppError } from "@/utils/error-handlers";
import { createReferenceDate } from "@/utils/moment-formatters";
import { TZDate } from "@date-fns/tz";
import { isSameDay } from "date-fns";
import _ from "lodash";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

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

export type StoreDailies = {
  lastDailyId: number;
  dailies: Daily[];
};

export type StoreSnacks = {
  lastSnackId: number;
  snacks: Snack[];
};

type StateData = StoreDailies & StoreSnacks;

type StateHandlers = {
  addSnack: (snack: SnackSchema) => void;
  deleteSnack: (snack: Snack) => void;
  updateSnack: (currentSnackData: Snack, newSnackData: SnackSchema) => void;
};

const initialData: StateData = {
  lastDailyId: 1,
  lastSnackId: 1,
  dailies: [],
  snacks: [],
};

const stateHandlers: StateHandlers = {
  addSnack: (snack: SnackSchema) => {},
  deleteSnack: (snack: Snack) => {},
  updateSnack: (currentSnackData: Snack, newSnackData: SnackSchema) => {},
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
        dailies: _.map(prevState.dailies, (daily) => {
          if (dateExist[0].id === daily.id) {
            return {
              ...daily,
            };
          }
          return daily;
        }),

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
      dailies: [
        {
          id: (prevState.lastDailyId + 1).toString(),
          date: new TZDate(dateReference).toISOString(),
        },
        ...prevState.dailies,
      ],

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

  const updateSnack = (currentSnackData: Snack, newSnackData: SnackSchema) => {
    const dateReference = createReferenceDate({
      date: newSnackData.date,
      hour: "00:00",
    });

    const dateSnackReference = createReferenceDate({
      date: newSnackData.date,
      hour: newSnackData.hour,
    });

    //Verifica se  data permanece no mesmo dia
    const snackInSameDay = isSameDay(
      currentSnackData.date,
      dateSnackReference.toISOString()
    );

    //Verifica se vai é a única refeição do dia
    const snacksInLastSameDay = state.snacks.filter((snackItem) =>
      isSameDay(snackItem.date, currentSnackData.date)
    );

    //flag para deletar o dia
    const willDeleteDay = _.size(snacksInLastSameDay) - 1 <= 0;

    if (!snackInSameDay) {
      //Verifica se a data já existe
      const dateExist = state.dailies.filter((day) =>
        isSameDay(day.date, dateReference.toISOString())
      );

      if (dateExist.length > 0) {
        return setState((prevState) => ({
          ...prevState,
          dailies: [
            ...(willDeleteDay
              ? _.filter(
                  prevState.dailies,
                  (day) => day.id !== currentSnackData.dailyId
                )
              : prevState.dailies),
          ],
          snacks: _.map(prevState.snacks, (snackItem) => {
            if (snackItem.id === currentSnackData.id) {
              return {
                ...snackItem,
                ...newSnackData,
                dailyId: dateExist[0].id,
                date: new TZDate(dateSnackReference).toISOString(),
              };
            }
            return snackItem;
          }),
        }));
      }

      return setState((prevState) => ({
        ...prevState,
        dailies: [
          {
            id: (prevState.lastDailyId + 1).toString(),
            date: new TZDate(dateReference).toISOString(),
          },
          ...(willDeleteDay
            ? _.filter(
                prevState.dailies,
                (day) => day.id !== currentSnackData.dailyId
              )
            : prevState.dailies),
        ],
        snacks: _.map(prevState.snacks, (snackItem) => {
          if (snackItem.id === currentSnackData.id) {
            return {
              ...snackItem,
              ...newSnackData,
              dailyId: (prevState.lastDailyId + 1).toString(),
              date: new TZDate(dateSnackReference).toISOString(),
            };
          }
          return snackItem;
        }),
        lastDailyId: prevState.lastDailyId + 1,
      }));
    }
    return setState((prevState) => ({
      ...prevState,
      snacks: _.map(prevState.snacks, (snackItem) => {
        if (snackItem.id === currentSnackData.id) {
          return {
            ...snackItem,
            ...newSnackData,
            date: new TZDate(dateSnackReference).toISOString(),
          };
        }
        return snackItem;
      }),
    }));
  };

  const deleteSnack = (snack: Snack) => {
    const dateExist = state.snacks.filter((snackIem) =>
      isSameDay(snackIem.date, snack.date)
    );

    //verifica se é a ultima refeição do dia, caso sim, o dia será removido
    const willDeleteDay = _.size(dateExist) - 1 <= 0;

    setState((prevState) => ({
      ...prevState,
      snacks: _.filter(
        prevState.snacks,
        (snackItem) => snackItem.id !== snack.id
      ),
      dailies: willDeleteDay
        ? _.filter(
            prevState.dailies,
            (dailyItem) => dailyItem.id !== snack.dailyId
          )
        : prevState.dailies,
    }));
  };

  const saveAppData = async () => {
    try {
      await setDailies({
        dailies: state.dailies,
        lastDailyId: state.lastDailyId,
      });
      await setSnacks({ snacks: state.snacks, lastSnackId: state.lastSnackId });
    } catch (e) {
      AppError(e);
    }
  };

  const getAppData = async () => {
    try {
      const dailiesData = await getDailies();
      const snacksData = await getSnacks();

      return setState({
        ...dailiesData,
        ...snacksData,
      });
    } catch (e) {
      AppError(e);
    }
  };

  useEffect(() => {
    getAppData();
  }, []);

  useEffect(() => {
    saveAppData();
  }, [state]);

  return (
    <DailyContext.Provider
      value={{
        ...state,
        addSnack,
        deleteSnack,
        updateSnack,
      }}
    >
      {children}
    </DailyContext.Provider>
  );
}
