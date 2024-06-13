import { z } from "zod";

export const lkDetailsFormValidationSchema = z.object({
  userName: z
    .string({
      required_error: "Введите имя пользователя",
    })
    .min(2, {
      message: "Имя пользователя должно содержать хотя бы 2 буквы",
    }),
  gender: z.enum(["male", "female"]).optional(),
  age: z.string().optional(),
  avatar: z.string().optional(),
});
