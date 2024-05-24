import { z } from "zod";

export const userNameSchema = z
  .string()
  .min(1, {
    message: "Введите свое имя",
  })
  .min(2, {
    message: "Имя пользователя должно содержать хотя бы 2 буквы",
  })
  .max(50, "Имя пользователя должно содержать максимум 50 букв");
