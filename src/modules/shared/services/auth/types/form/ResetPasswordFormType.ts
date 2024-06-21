import { z } from "zod";
import { authResetPasswordFormValidationSchema } from "../../validation/authResetPasswordFormValidationSchema";

export type ResetPasswordFormType = z.infer<typeof authResetPasswordFormValidationSchema>;
