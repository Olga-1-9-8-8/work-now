import { z } from "zod";

const MAX_FILE_SIZE = 300_000;

const ACCEPTED_FILE_TYPES = new Set(["image/jpeg", "image/jpg", "image/png", "image/webp"]);

export const lkDetailsFormValidationSchema = z.object({
  userName: z
    .string({
      required_error: "Введите имя пользователя",
    })
    .min(2, {
      message: "Имя пользователя должно содержать хотя бы 2 буквы",
    }),
  gender: z.enum(["male", "female"]).optional(),
  age: z.number().optional(),
  avatar: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, "Файл должен быть меньше 3MB")
    .refine(
      (file) => ACCEPTED_FILE_TYPES.has(file.type),
      "Только .jpg, .jpeg, .png файлы доступны к загрузке",
    )
    .optional(),
});
