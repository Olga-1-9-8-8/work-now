import { z } from "zod";
import { getAuthSignUpFormValidationSchema } from "../../validation/getAuthSignUpFormValidationSchema";

export type SignUpFormType = z.infer<ReturnType<typeof getAuthSignUpFormValidationSchema>>;
