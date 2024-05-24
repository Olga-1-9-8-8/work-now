import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(1, {
    message: "Введите пароль",
  })
  .min(6, {
    message: "Минимальная длина пароля 6 символов",
  });
