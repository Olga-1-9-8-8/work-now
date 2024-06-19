import { z } from "zod";
import { emailSchema } from "../../../validation";

export const authResetPasswordFormValidationSchema = z.object({
  email: emailSchema,
});
