export interface VacancyApiTypeInput {
  id: string;
  source: string;
  region: Region;
  company: Company;
  "creation-date": string;
  salary: string;
  salary_min: number;
  salary_max: number;
  "job-name": string;
  vac_url: string;
  employment: string;
  schedule: string;
  duty: string;
  category: Category;
  requirement: Requirement;
  addresses: Addresses;
  social_protected: string;
  term: Term;
  contact_list: ContactList[];
  contact_person: string;
  work_places: number;
  code_profession: string;
  currency: string;
}

export interface Addresses {
  address: Address[];
}

export interface Address {
  location: string;
  lng: string;
  lat: string;
}

export interface Category {
  specialisation: string;
}

export interface Company {
  companycode: string;
  email: string;
  "hr-agency": boolean;
  inn: string;
  kpp: string;
  name: string;
  ogrn: string;
  url: string;
}

export interface ContactList {
  contact_type: string;
  contact_value: string;
}

export interface Region {
  region_code: string;
  name: string;
}

export interface Requirement {
  education: string;
  experience: number;
}

export interface Term {
  text: string;
}
