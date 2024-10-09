import { z } from "zod";
import { getResumeFormValidationSchema } from "../validation/getResumeFormValidationSchema";

export type ResumeCreationFormType = z.infer<ReturnType<typeof getResumeFormValidationSchema>>;
