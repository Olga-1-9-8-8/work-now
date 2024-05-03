import {
  EducationType,
  EmploymentType,
  ScheduleType,
  WeekHoursType,
} from "../../../configs/searchOptionsConfig";
import { GenderType } from "../../user";

export interface SearchCardListItem {
  id: number;
  name: string;
  position: string;
  creationDate?: Date | null;
  city?: string;
  applicantsQuantity?: number;
  employment?: EmploymentType[] | EmploymentType;
  salary?: number[];
  schedule?: ScheduleType | WeekHoursType[];
  about?: string;
  education?: EducationType;
  employmentStartDate?: Date;
  views?: number;
  phone?: string;
  gender?: GenderType;
  age?: number;
  image?: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
}

export type SearchCardList = SearchCardListItem[];
