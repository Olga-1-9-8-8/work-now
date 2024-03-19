import { GenderType } from "./GenderType";

export interface User {
  name: string;
  image?: string;
  gender: GenderType;
  phone: string;
}
