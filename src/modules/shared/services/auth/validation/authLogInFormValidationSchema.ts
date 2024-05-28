import { z } from "zod";
import { emailSchema, passwordSchema } from "../../../validation";

export const authLogInFormValidationSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
