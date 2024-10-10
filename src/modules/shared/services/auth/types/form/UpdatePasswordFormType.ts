import { z } from "zod";
import { getAuthUpdatePasswordFormValidationSchema } from "../../validation/getAuthUpdatePasswordFormValidationSchema";

export type UpdatePasswordFormType = z.infer<
  ReturnType<typeof getAuthUpdatePasswordFormValidationSchema>
>;
