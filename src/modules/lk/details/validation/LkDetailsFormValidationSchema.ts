import { z } from "zod";
import { userNameSchema } from "../../../shared/validation";

export const lkDetailsFormValidationSchema = z.object({
  userName: userNameSchema,
  gender: z.enum(["male", "female", ""]).optional(),
  age: z
    .string()
    .refine(
      (age) => {
        const parsedAge = Number(age);
        return parsedAge >= 14 || !parsedAge;
      },
      { message: "Возраст должен быть больше 14" },
    )
    .optional(),
  avatar: z.string().optional(),
});
