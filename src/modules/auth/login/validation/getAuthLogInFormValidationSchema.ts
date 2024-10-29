import { z } from "zod";
import { LanguageType } from "../../../shared/configs";
import { getEmailSchema, getPasswordSchema } from "../../../shared/validation";

export const getAuthLogInFormValidationSchema = (language: LanguageType) =>
  z.object({
    email: getEmailSchema(language),
    password: getPasswordSchema(language),
  });
