import { z } from "zod";
import { getAuthLogInFormValidationSchema } from "../../validation/getAuthLogInFormValidationSchema";

export type LogInFormType = z.infer<ReturnType<typeof getAuthLogInFormValidationSchema>>;
