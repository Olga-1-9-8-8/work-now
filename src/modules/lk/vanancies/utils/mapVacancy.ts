import { VacancyWithProfileApiTypeInput } from "../../../shared/api";
import { mapProfile } from "../../../shared/services/auth";
import { mapUniversalItem } from "../../../shared/utils";

export const mapVacancy = (vacancy: VacancyWithProfileApiTypeInput) => {
  const { profiles, ...vacancyData } = vacancy;
  const profileData = profiles ? mapProfile(profiles) : null;
  if (!profileData) {
    return { ...mapUniversalItem(vacancyData) };
  }

  return { ...profileData, ...mapUniversalItem(vacancyData) };
};
