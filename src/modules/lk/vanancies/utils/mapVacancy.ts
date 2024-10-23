import { VacancyWithProfileApiTypeInput } from "../../../shared/api";
import { LanguageType } from "../../../shared/configs";
import { mapProfile } from "../../../shared/services/auth";
import { mapUniversalItem } from "../../../shared/utils";

export const mapVacancy = (vacancy: VacancyWithProfileApiTypeInput, language: LanguageType) => {
  const { profiles, ...vacancyData } = vacancy;
  const profileData = profiles ? mapProfile(profiles) : null;
  if (!profileData) {
    return { ...mapUniversalItem(vacancyData, language) };
  }

  return { ...profileData, ...mapUniversalItem(vacancyData, language) };
};
