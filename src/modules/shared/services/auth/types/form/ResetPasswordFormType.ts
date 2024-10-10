import { z } from "zod";
import { getAuthResetPasswordFormValidationSchema } from "../../validation/getAuthResetPasswordFormValidationSchema";

export type ResetPasswordFormType = z.infer<
  ReturnType<typeof getAuthResetPasswordFormValidationSchema>
>;
