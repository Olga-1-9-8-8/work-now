export interface VacancyItem {
  id: string;
  companyCode: string;
  name: string;
  position: string;
  creationDate: Date;
  city?: string;
  employment?: string;
  salary?: number[];
  schedule?: string;
  about?: string;
  education?: string;
  phone: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
}
