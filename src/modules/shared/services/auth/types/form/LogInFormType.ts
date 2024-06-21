import { z } from "zod";
import { authLogInFormValidationSchema } from "../../validation/authLogInFormValidationSchema";

export type LogInFormType = z.infer<typeof authLogInFormValidationSchema>;
