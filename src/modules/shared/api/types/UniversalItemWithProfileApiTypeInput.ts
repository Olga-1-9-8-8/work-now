import { ProfileApiTypeInput } from "./ProfileApiType";
import { ResumeApiType } from "./ResumeApiType";
import { VacancyApiType } from "./VacancyApiType";

export interface UniversalItemApiTypeInput extends ResumeApiType, Omit<VacancyApiType, "gender"> {
  gender?: string | null;
}

export interface UniversalItemWithProfileApiTypeInput extends UniversalItemApiTypeInput {
  profiles: ProfileApiTypeInput | null;
}
