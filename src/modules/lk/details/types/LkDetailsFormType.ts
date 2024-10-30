import { z } from "zod";
import { getLkDetailsFormValidationSchema } from "../validation/getLkDetailsFormValidationSchema";

export type LkDetailsFormType = z.infer<ReturnType<typeof getLkDetailsFormValidationSchema>>;
