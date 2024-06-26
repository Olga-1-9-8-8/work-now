import { Database } from "../../../../shared/services";

export type ProfileApiTypeInput = Database["public"]["Tables"]["profiles"]["Row"];
export type VacancyApiType = Database["public"]["Tables"]["vacancies"]["Row"];

export interface VacancyWithProfileApiTypeInput extends VacancyApiType {
  profiles: ProfileApiTypeInput | null;
}
