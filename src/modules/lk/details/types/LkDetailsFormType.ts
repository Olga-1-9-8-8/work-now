import { z } from "zod";
import { getLkDetailsFormValidationSchema } from "../validation/lkDetailsFormValidationSchema";

export type LkDetailsFormType = z.infer<ReturnType<typeof getLkDetailsFormValidationSchema>>;
