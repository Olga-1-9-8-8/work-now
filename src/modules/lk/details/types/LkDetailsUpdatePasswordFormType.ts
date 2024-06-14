import { z } from "zod";
import { lkDetailsUpdatePasswordFormValidationSchema } from "../validation/lkDetailsUpdatePasswordFormValidationSchema";

export type LkDetailsUpdatePasswordFormType = z.infer<
  typeof lkDetailsUpdatePasswordFormValidationSchema
>;
