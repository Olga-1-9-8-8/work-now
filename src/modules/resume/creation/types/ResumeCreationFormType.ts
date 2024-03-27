import { z } from "zod";
import { resumeFormValidationSchema } from "../validation/resumeFormValidationSchema";

export type ResumeCreationFormType = z.infer<typeof resumeFormValidationSchema>;
