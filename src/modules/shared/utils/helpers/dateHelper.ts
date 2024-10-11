/* eslint-disable unicorn/no-useless-undefined */
import { differenceInCalendarDays, format, parse, sub } from "date-fns";
import { LanguageType } from "../../configs";
import { getLocale } from "../getLocales";

/**
 * @param date date format
 * @example  Date -> "23 марта ?2024"
 */
export const getDayMonthYear = (date: Date, language: LanguageType): string => {
  return format(
    date,
    `d MMMM${date.getFullYear() === new Date().getFullYear() ? "" : " yyyy г."}`,
    {
      locale: getLocale(language),
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

const formattedTimeStringConfig = {
  ru: {
    lastDay: "сегодня",
    lastDayAt: "сегодня в",
    lastTwoDays: "вчера",
    lastTwoDaysAt: "вчера в",
  },
  en: {
    lastDay: "today",
    lastDayAt: "today at",
    lastTwoDays: "yesterday",
    lastTwoDaysAt: "yesterday at",
  },
  de: {
    lastDay: "heute",
    lastDayAt: "heute um",
    lastTwoDays: "gestern",
    lastTwoDaysAt: "gestern um",
  },
};

/**
 * @param {Date} date - The date to be formatted.
 * @example "2022-05-23T00:00:00.000Z" -> "23 марта ?2022"
 * @return {string} The formatted time string.
 */
export const formattedTimeString = (date: Date, language: LanguageType): string => {
  const today = new Date();
  const dateValue = new Date(date);
  const daysDifference = differenceInCalendarDays(today, dateValue);

  let timeString = "";
  if (daysDifference === 0) {
    timeString = date.getHours()
      ? formattedTimeStringConfig[language].lastDayAt
      : formattedTimeStringConfig[language].lastDay;
  } else if (daysDifference === 1) {
    timeString = date.getHours()
      ? formattedTimeStringConfig[language].lastTwoDaysAt
      : formattedTimeStringConfig[language].lastTwoDays;
  } else {
    timeString = getDayMonthYear(date, language);
  }

  const formattedTime = `${timeString} ${date.getHours() ? format(date, "H:mm", { locale: getLocale(language) }) : ""}`;
  return formattedTime;
};

/**
 * @param parameter lastDay | lastTwoDays | lastThreeDays | lastWeek | lastMonth
 * @example "lastDay" -> "2022-05-22"
 * @example "lastTwoDays" -> "2022-05-21"
 * @example "lastThreeDays" -> "2022-05-20"
 * @example "lastWeek" -> "2022-05-15"
 * @example "lastMonth" -> "2022-04-01"
 * @returns "2022-05-22" | "2022-05-21" | "2022-05-20" | "2022-05-15" | "2022-04-01"
 * */
export const getDateFromUrlString = (parameter: string) => {
  switch (parameter) {
    case "lastDay": {
      return format(sub(new Date(), { days: 1 }), "yyyy-MM-dd");
    }

    case "lastTwoDays": {
      return format(sub(new Date(), { days: 2 }), "yyyy-MM-dd");
    }

    case "lastThreeDays": {
      return format(sub(new Date(), { days: 3 }), "yyyy-MM-dd");
    }

    case "lastWeek": {
      return format(sub(new Date(), { weeks: 1 }), "yyyy-MM-dd");
    }

    case "lastMonth": {
      return format(sub(new Date(), { months: 1 }), "yyyy-MM-dd");
    }
    default: {
      return undefined;
    }
  }
};
