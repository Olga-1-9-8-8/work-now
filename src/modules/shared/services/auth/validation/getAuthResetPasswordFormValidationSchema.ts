import { z } from "zod";
import { LanguageType } from "../../../configs";
import { getEmailSchema } from "../../../validation";

export const getAuthResetPasswordFormValidationSchema = (language: LanguageType) =>
  z.object({
    email: getEmailSchema(language),
  });
