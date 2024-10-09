import { VacancyApiType } from "../../../../shared/api";

export type CreateEditVacancyType = Omit<VacancyApiType, "id" | "gender"> & {
  id?: number;
  gender?: string | null;
};
