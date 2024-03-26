import { GenderType } from "./GenderType";

export interface User {
  name: string;
  image?: File;
  gender: GenderType;
  phone: string;
}
