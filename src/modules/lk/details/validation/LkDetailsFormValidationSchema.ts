import { z } from "zod";
import { UserEntity } from "../../../shared/types";
import { userNameSchema } from "../../../shared/validation";

const getAgeSchema = (role: UserEntity) => {
  if (role === UserEntity.Person) {
    return z
      .string()
      .refine(
        (age) => {
          const parsedAge = Number(age);
          return parsedAge >= 14 || !parsedAge;
        },
        { message: "Возраст должен быть больше 14" },
      )
      .optional();
  }
  return z
    .string()
    .refine(
      (age) => {
        const parsedAge = Number(age);
        return parsedAge >= 0 || !parsedAge;
      },
      { message: "Количество лет должно быть больше 0" },
    )
    .optional();
};

export const getLkDetailsFormValidationSchema = (role: UserEntity) =>
  z.object({
    userName: userNameSchema,
    gender: z.enum(["male", "female", ""]).optional(),
    age: getAgeSchema(role),
    avatar: z.string().optional(),
  });
