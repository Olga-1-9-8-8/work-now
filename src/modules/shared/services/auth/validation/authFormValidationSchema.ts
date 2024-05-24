import { z } from "zod";
import { emailSchema, passwordSchema, phoneSchema, userNameSchema } from "../../../validation";

export const authFormValidationSchema = z.object({
  userName: userNameSchema,
  email: emailSchema,
  password: passwordSchema,
  phone: phoneSchema,
});
