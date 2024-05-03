import { z } from "zod";

export const resumeFormValidationSchema = z.object({
  position: z
    .string()
    .min(2, "Строка должна содержать минимум 2ве буквы")
    .max(50, "Строка должна содержать максимум 50 букв"),
  employment: z.array(z.string()),
  schedule: z.array(z.string()),
  salary: z.array(z.number()),
  city: z.string(),
  education: z.string(),
  about: z.string(),
  employmentStartDate: z.date().nullable(),
});
