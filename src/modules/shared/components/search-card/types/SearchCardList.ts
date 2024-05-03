import {
  EducationType,
  EmploymentType,
  ScheduleType,
  WeekHoursType,
} from "../../../configs/searchOptionsConfig";

export interface SearchCardListItem {
  id: number;
  name: string;
  position: string;
  creationDate?: Date | null;
  city: string;
  employment: EmploymentType[] | EmploymentType;
  salary: number[];
  schedule: ScheduleType | WeekHoursType[];
  about: string;
  education?: EducationType;
  employmentStartDate?: Date | null;
  views?: number;
  applicantsQuantity?: number;
  phone?: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
}

export type SearchCardList = SearchCardListItem[];
