import { z } from "zod";
import { authUpdatePasswordFormValidationSchema } from "../../validation/authUpdatePasswordFormValidationSchema";

export type UpdatePasswordFormType = z.infer<typeof authUpdatePasswordFormValidationSchema>;
