import { z } from "zod";
import { lkDetailsFormValidationSchema } from "../validation/lkDetailsFormValidationSchema";

export type LkDetailsFormType = z.infer<typeof lkDetailsFormValidationSchema>;
