import { Daily, Snack } from "@/store/DailyContext";
import _ from "lodash";

export const countSnacks = (snacks: Snack[]) =>
  snacks.reduce((tSnacks) => tSnacks + 1, 0);

export const countWithinTheDiet = (snacks: Snack[]) =>
  snacks.reduce((total, snack) => (snack.withinTheDiet ? total + 1 : total), 0);

export const countOutsideTheDiet = (snacks: Snack[]) =>
  snacks.reduce(
    (total, snack) => (!snack.withinTheDiet ? total + 1 : total),
    0
  );

export const isGoodDiet = (percent: number) => percent >= 0.5;

export const getBestSequence = (snacks: Snack[]) => {
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
};
