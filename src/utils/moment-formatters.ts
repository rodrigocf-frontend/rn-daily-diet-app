import { TZDate } from "@date-fns/tz";
import { isValid, parse } from "date-fns";

export function formatDate(value: string) {
  const justDigits = value.replace(/\D/g, "");

  let valueFormmated = justDigits;

  if (justDigits.length > 2) {
    valueFormmated = justDigits.substring(0, 2) + "/" + justDigits.substring(2);
  }

  if (justDigits.length > 4) {
    valueFormmated =
      valueFormmated.substring(0, 5) + "/" + valueFormmated.substring(5);
  }

  return valueFormmated.substring(0, 10);
}

export function formatHour(value?: string): string {
  if (!value) {
    return "";
  }

  const justDigits = value.replace(/\D/g, "");

  let valueFormatted = justDigits;

  if (justDigits.length > 2) {
    valueFormatted = justDigits.substring(0, 2) + ":" + justDigits.substring(2);
  }

  return valueFormatted.substring(0, 5);
}

export function validateDateTime({
  date,
  hour,
}: {
  date: string;
  hour: string;
}): boolean {
  const referenceDate = createReferenceDate({ date, hour });

  return isValid(referenceDate);
}

export function createReferenceDate({
  date,
  hour,
}: {
  date: string;
  hour: string;
}): Date {
  const dateTimeString = `${date} ${hour}`;
  const formatString = "dd/MM/yyyy HH:mm";

  return parse(dateTimeString, formatString, new TZDate(0));
}
