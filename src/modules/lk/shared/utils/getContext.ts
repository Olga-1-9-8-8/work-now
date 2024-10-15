/* eslint-disable unicorn/no-useless-undefined */
import { NavTypes } from "../../../shared/configs/lkNavConfig";
import { useLkTotalAppliesCountContext } from "../context/LkTotalAppliesCountContextProvider";
import { useLkTotalFavoritesCountContext } from "../context/LkTotalFavoritesCountContextProvider";
import { useLkTotalProfileResumesCountContext } from "../context/LkTotalProfileResumesCountContextProvider";
import { useLkTotalProfileVacanciesCountContext } from "../context/LkTotalProfileVacanciesCountContextProvider";

const contextMap = {
  resumes: useLkTotalProfileResumesCountContext,
  vacancies: useLkTotalProfileVacanciesCountContext,
  applies: useLkTotalAppliesCountContext,
  favorites: useLkTotalFavoritesCountContext,
};

export const getContext = (value: NavTypes) => {
  switch (value) {
    case "resumes":
    case "vacancies":
    case "applies":
    case "favorites": {
      return contextMap[value]();
    }
    default: {
      return undefined;
    }
  }
};
