import { z } from "zod";
import { userNameSchema } from "../../../shared/validation";

export const lkDetailsFormValidationSchema = z.object({
  userName: userNameSchema,
  gender: z.enum(["male", "female", ""]).optional(),
  age: z.string().optional(),
  avatar: z.string().optional(),
});
