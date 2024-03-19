import { z } from "zod";
import { ResumeCreationFormValidationSchema } from "../validation/ResumeCreationFormValidationSchema";

export type ResumeCreationFormType = z.infer<typeof ResumeCreationFormValidationSchema>;
