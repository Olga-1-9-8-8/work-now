import { Database } from "./database.types";
import { ProfileApiTypeInput } from "./ProfileApiType";

export type VacancyApiType = Database["public"]["Tables"]["vacancies"]["Row"];

export interface VacancyWithProfileApiTypeInput extends VacancyApiType {
  profiles: ProfileApiTypeInput | null;
}
