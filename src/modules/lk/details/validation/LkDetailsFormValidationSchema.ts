import { z } from "zod";
import { LanguageType } from "../../../shared/configs/internationalization/InternationalizationConfig";
import { UserEntity } from "../../../shared/types";
import { getAgeSchema, getUserNameSchema } from "../../../shared/validation";

export const getLkDetailsFormValidationSchema = (role: UserEntity, language: LanguageType) =>
  z.object({
    userName: getUserNameSchema(language),
    gender: z.enum(["male", "female", "_not_set", ""]).optional(),
    age: getAgeSchema(role, language),
    avatar: z.string().optional(),
  });
