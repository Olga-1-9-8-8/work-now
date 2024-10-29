import { z } from "zod";
import { LanguageType } from "../../../shared/configs";
import { getEmailSchema } from "../../../shared/validation";

export const getAuthResetPasswordFormValidationSchema = (language: LanguageType) =>
  z.object({
    email: getEmailSchema(language),
  });
