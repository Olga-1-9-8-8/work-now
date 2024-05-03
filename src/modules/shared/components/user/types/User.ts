import { GenderType } from "./GenderType";

export interface User {
  fullName: string;
  image?: string;
  gender?: GenderType;
  age?: number;
  phone: string;
}
