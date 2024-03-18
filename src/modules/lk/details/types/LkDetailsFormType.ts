import { z } from "zod";
import { LkDetailsFormValidationSchema } from "../validation/LkDetailsFormValidationSchema";

export type LkDetailsFormType = z.infer<typeof LkDetailsFormValidationSchema>;
