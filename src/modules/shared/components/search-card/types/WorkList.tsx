export interface WorkListItem {
  id: number;
  city: string;
  fullName: string;
  employment: string[];
  position: string;
  salary: string[];
  schedule: string[];
  phone?: string;
  education?: string;
  experience?: Number;
  about: string;
  employmentStartDate?: Date;
}

export type WorkList = WorkListItem[];
