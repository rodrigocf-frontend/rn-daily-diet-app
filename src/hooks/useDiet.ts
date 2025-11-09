import { DailyContext } from "@/store/DailyContext";
import _ from "lodash";
import { use, useCallback, useMemo } from "react";

export const useDiet = () => {
  const { snacks } = use(DailyContext);

  const snacksCount = useMemo(
    () => _.countBy(snacks, "withinTheDiet"),
    [snacks]
  );

  const countInTheDiet = useMemo(
    () => _.get(snacksCount, "true") ?? 0,
    [snacksCount]
  );

  const countOutTheDiet = useMemo(
    () => _.get(snacksCount, "false") ?? 0,
    [snacksCount]
  );

  const countTotalSnacks = useMemo(() => _.size(snacks), [snacks]);

  const percentWithinTheDiet = useMemo(
    () => countInTheDiet / countTotalSnacks,
    [countTotalSnacks, countInTheDiet]
  );

  const isGoodDiet = useMemo(
    () => percentWithinTheDiet >= 0.5,
    [percentWithinTheDiet]
  );

  const countBestSequence = useMemo(() => {
    let count = 0;
    const sequences: number[] = [];
    const orderedSnacks = _.orderBy(snacks, ["date"], ["desc"]);

    orderedSnacks.forEach((snack) => {
      if (!snack.withinTheDiet) {
        sequences.push(count);
        count = 0;
      } else {
        count += 1;
      }
    });

    if (count > 0) {
      sequences.push(count);
    }

    if (_.size(sequences) > 0) {
      return _.max(sequences);
    }
    return 0;
  }, [snacks]);

  return {
    countInTheDiet,
    countOutTheDiet,
    countTotalSnacks,
    countBestSequence,
    percentWithinTheDiet,
    isGoodDiet,
  };
};
