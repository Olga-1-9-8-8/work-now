import { z } from "zod";
import {
  educationTypes,
  employmentTypes,
  scheduleTypes,
  weekHoursTypes,
} from "../../../shared/types";

export const vacancyFormValidationSchema = z.object({
  userId: z.string(),
  position: z
    .string()
    .min(2, "Строка должна содержать минимум 2ве буквы")
    .max(50, "Строка должна содержать максимум 50 букв"),
  city: z.string(),
  applicantsQuantity: z.number().default(0),
  employment: z.array(z.enum(employmentTypes)).optional(),
  salary: z.array(z.number()),
  schedule: z.array(z.enum(scheduleTypes)).optional(),
  weekHours: z.array(z.enum(weekHoursTypes)).optional(),
  about: z.string(),
  education: z.enum(educationTypes).optional(),
  employmentStartDate: z.date().optional(),
  views: z.number().default(0),
});
