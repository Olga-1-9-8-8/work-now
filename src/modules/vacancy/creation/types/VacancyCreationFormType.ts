import { z } from "zod";
import { getVacancyFormValidationSchema } from "../validation/getVacancyFormValidationSchema";

export type VacancyCreationFormType = z.infer<ReturnType<typeof getVacancyFormValidationSchema>>;
