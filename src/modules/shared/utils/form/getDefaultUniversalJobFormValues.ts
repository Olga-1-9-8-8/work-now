import { z } from "zod";
import {
  EducationType,
  EmploymentType,
  ScheduleType,
  UniversalJobType,
  WeekHoursType,
} from "../../types";
import { getDefaultsValuesFromValidationSchema } from "../../validation";

export const getDefaultUniversalJobFormValues = (
  schema: z.AnyZodObject | z.ZodEffects<any>,
  item?: UniversalJobType,
) => {
  if (item) {
    return {
      userId: item.userId,
      position: item.position,
      cities: item.cities ? item.cities.map(({ city }) => city) : undefined,
      applicantsQuantity: item.applicantsQuantity,
      employment: item.employment as EmploymentType[],
      salary: item.salary,
      schedule: item.schedule as ScheduleType[],
      weekHours: item.weekHours as WeekHoursType[],
      about: item.about,
      education: item.education as EducationType,
      employmentStartDate: item.employmentStartDate,
      views: item.views || 0,
      gender: item.gender ?? "_not_set",
    };
  }

  return getDefaultsValuesFromValidationSchema<typeof schema>(schema);
};
