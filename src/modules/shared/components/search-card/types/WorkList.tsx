export interface WorkListItem {
  id: number;
  city: string;
  fullName: string;
  employment: string;
  position: string;
  salary: string[];
  schedule: string;
  site?: string;
  phone?: string;
  education?: string;
  experience?: Number;
  employmentStartDate?: string;
}

export type WorkList = WorkListItem[];
