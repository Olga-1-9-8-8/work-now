import { EducationType } from "../EducationType";
import { EmploymentType } from "../EmploymentType";
import { ScheduleType } from "../ScheduleType";
import { WeekHoursType } from "../WeekHoursType";

export interface ItemType {
  id: number;
  userId: string;
  position: string;
  creationDate: Date;
  city?: string;
  applicantsQuantity: number;
  employment?: EmploymentType[];
  salary?: number[];
  schedule?: ScheduleType[];
  weekHours?: WeekHoursType[];
  about?: string;
  education?: EducationType;
  employmentStartDate?: Date;
  views: number;
  updatedAt?: Date;
  isInFavorites?: boolean;
  isInApplies?: boolean;
}
