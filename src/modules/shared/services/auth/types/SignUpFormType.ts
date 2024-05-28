import { z } from "zod";
import { authSignUpFormValidationSchema } from "../validation/authSignUpFormValidationSchema";

export type SignUpFormType = z.infer<typeof authSignUpFormValidationSchema>;
