import { differenceInDays, format, parse } from "date-fns";
import { ru } from "date-fns/locale";

/**
 * @param date date format
 * @example  Date -> "23 марта ?2024"
 */
export const getDayMonthYear = (date: Date): string => {
  return format(
    date,
    `d MMMM${date.getFullYear() === new Date().getFullYear() ? "" : " yyyy г."}`,
    {
      locale: ru,
    },
  );
};

/**
 * @param date date string format
 * @example "2022-05-23" -> Date
 */
export const parseDateFromString = (date: string): Date => {
  return parse(date, "yyyy-MM-dd", new Date());
};

/**
 * @param date date string | Date format
 * @example  Date -> "сегодня в 12:56" | "вчера в 12:56" | "23 мая в 12:56"
 */
export const formattedTimeString = (date: Date): string => {
  const today = new Date();
  const dateValue = new Date(date);
  const daysDifference = differenceInDays(today, dateValue);

  let timeString = "";
  if (daysDifference === 0) {
    timeString = date.getHours() ? "сегодня в" : "сегодня";
  } else if (daysDifference === 1) {
    timeString = date.getHours() ? "вчера в" : "вчера";
  } else {
    timeString = getDayMonthYear(date);
  }

  const formattedTime = `${timeString} ${date.getHours() ? format(date, "H:mm") : ""}`;
  return formattedTime;
};
