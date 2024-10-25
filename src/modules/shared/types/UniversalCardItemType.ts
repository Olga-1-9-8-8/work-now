import { CityType } from "./CityType";
import { EducationType } from "./EducationType";
import { EmploymentType } from "./EmploymentType";
import { GenderType } from "./GenderType";
import { ScheduleType } from "./ScheduleType";
import { UserEntity } from "./UserRoles";
import { WeekHoursType } from "./WeekHoursType";

interface UniversalProfileType {
  userName?: string;
  phone?: string;
  gender?: GenderType;
  age?: string;
  avatar?: string;
  role?: UserEntity;
}

export interface UniversalJobType {
  id: number;
  userId: string;
  position: string;
  creationDate: Date;
  updatedAt?: Date;
  cities?: CityType[];
  applicantsQuantity: number;
  employment?: EmploymentType[];
  salary?: number[];
  schedule?: ScheduleType[];
  weekHours?: WeekHoursType[];
  about?: string;
  education?: EducationType;
  employmentStartDate?: Date;
  views: number;
  companyCode?: string;
  gender?: GenderType;
}

export interface UniversalCardItemType extends UniversalProfileType, UniversalJobType {}
