/* eslint-disable no-underscore-dangle */
import { z } from "zod";

export const getDefaultsValuesFromValidationSchema = <T extends z.ZodTypeAny>(
  schema: z.AnyZodObject | z.ZodEffects<any>,
): z.infer<T> => {
  if (schema instanceof z.ZodEffects) {
    if (schema.innerType() instanceof z.ZodEffects)
      return getDefaultsValuesFromValidationSchema(schema.innerType());

    return getDefaultsValuesFromValidationSchema(z.ZodObject.create(schema.innerType().shape));
  }

  const getDefaultValue = (s: z.ZodTypeAny): unknown => {
    if (s instanceof z.ZodDefault) return s._def.defaultValue();
    if (s instanceof z.ZodArray) return [];
    if (s instanceof z.ZodString) return "";
    if (s instanceof z.ZodObject) return getDefaultsValuesFromValidationSchema(s);
    if (!("innerType" in s._def)) return undefined;
    return getDefaultValue(s._def.innerType);
  };

  return Object.fromEntries(
    Object.entries(schema.shape).map(([key, value]) => {
      return [key, getDefaultValue(value as z.ZodTypeAny)];
    }),
  );
};
