import { z } from "zod";
import { LanguageType } from "../../../shared/configs";
import {
  educationTypes,
  employmentTypes,
  scheduleTypes,
  weekHoursTypes,
} from "../../../shared/types";
import { genderTypes } from "../../../shared/types/GenderType";
import { getCitiesSchema, getPositionSchema } from "../../../shared/validation";

export const getVacancyFormValidationSchema = (language: LanguageType) =>
  z.object({
    userId: z.string(),
    position: getPositionSchema(language),
    cities: getCitiesSchema(language),
    applicantsQuantity: z.number().default(0),
    employment: z.array(z.enum(employmentTypes)).optional(),
    salary: z.array(z.number()),
    schedule: z.array(z.enum(scheduleTypes)).optional(),
    weekHours: z.array(z.enum(weekHoursTypes)).optional(),
    about: z.string().optional(),
    education: z.enum(educationTypes).optional(),
    employmentStartDate: z.date().optional(),
    views: z.number().default(0),
    gender: z.enum([...genderTypes, "_not_set"]).default("_not_set"),
  });
