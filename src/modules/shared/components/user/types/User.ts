import { GenderType } from "../../../types";

export interface User {
  userName: string;
  avatar?: File;
  gender?: GenderType;
  age?: number;
  phone: string;
}
