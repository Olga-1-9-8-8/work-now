import { z } from "zod";

export const phoneSchema = z
  .string()
  .min(1, {
    message: "Введите номер телефона",
  })
  .min(10, {
    message: "Неверный номер телефона, менее 10 цифр",
  });
