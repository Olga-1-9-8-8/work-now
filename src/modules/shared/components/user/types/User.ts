import { GenderType } from "../../../types";

export interface User {
  userName: string;
  avatar?: File;
  gender?: GenderType;
  age?: string;
  phone: string;
}
