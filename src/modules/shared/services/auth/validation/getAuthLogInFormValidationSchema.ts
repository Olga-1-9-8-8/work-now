import { z } from "zod";
import { LanguageType } from "../../../configs";
import { getEmailSchema, getPasswordSchema } from "../../../validation";

export const getAuthLogInFormValidationSchema = (language: LanguageType) =>
  z.object({
    email: getEmailSchema(language),
    password: getPasswordSchema(language),
  });
