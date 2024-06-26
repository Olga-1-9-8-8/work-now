import { z } from "zod";
import { vacancyFormValidationSchema } from "../validation/vacancyFormValidationSchema";

export type VacancyCreationFormType = z.infer<typeof vacancyFormValidationSchema>;
