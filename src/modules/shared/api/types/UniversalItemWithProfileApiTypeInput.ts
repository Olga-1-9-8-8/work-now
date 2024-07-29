import { ProfileApiTypeInput } from "./ProfileApiType";
import { ResumeApiType } from "./ResumeApiType";
import { VacancyApiType } from "./VacancyApiType";

export interface UniversalItemApiTypeInput extends ResumeApiType, VacancyApiType {}

export interface UniversalItemWithProfileApiTypeInput extends UniversalItemApiTypeInput {
  profiles: ProfileApiTypeInput | null;
}
