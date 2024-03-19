import { z } from "zod";

export const ResumeCreationFormValidationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Строка должна содержать минимум 2ве буквы")
    .max(50, "Строка должна содержать максимум 50 букв"),
  position: z
    .string()
    .min(2, "Строка должна содержать минимум 2ве буквы")
    .max(50, "Строка должна содержать максимум 50 букв"),
  employment: z.array(z.string()),
  schedule: z.array(z.string()),
  salary: z.array(z.number()).nonempty({
    message: "Выберите зарплату",
  }),
  city: z.string(),
  about: z.string(),
});
