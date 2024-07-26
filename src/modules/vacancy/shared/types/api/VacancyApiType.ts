import { Database } from "../../../../shared/services";
import { ProfileApiTypeInput } from "../../../../shared/services/auth";

export type VacancyApiType = Database["public"]["Tables"]["vacancies"]["Row"];

export interface VacancyWithProfileApiTypeInput extends VacancyApiType {
  profiles: ProfileApiTypeInput | null;
}
