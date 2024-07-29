import { Database } from "./database.types";
import { ProfileApiTypeInput } from "./ProfileApiType";

export type VacancyApiType = Database["public"]["Tables"]["vacancies"]["Row"] & {
  isInFavorites?: boolean;
  isInApplies?: boolean;
};

export interface VacancyWithProfileApiTypeInput extends VacancyApiType {
  profiles: ProfileApiTypeInput | null;
}
