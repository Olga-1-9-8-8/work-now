import { z } from "zod";

export const emailSchema = z
  .string()
  .min(1, {
    message: "Введите Email",
  })
  .email({ message: "Неверный адрес электронной почты" });
