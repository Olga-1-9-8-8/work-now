import { EducationType, EmploymentType, ScheduleType, WeekHoursType } from "../../../shared/types";

export interface VacancyItem {
  id: number;
  name: string;
  position: string;
  creationDate: Date;
  city?: string;
  employment?: EmploymentType[];
  salary?: number[];
  schedule?: ScheduleType | WeekHoursType[];
  about?: string;
  education?: EducationType;
  phone: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
}
