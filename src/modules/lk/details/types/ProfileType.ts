import { GenderType } from "../../../shared/types";

export interface ProfileType {
  id: string;
  age?: string;
  avatar?: string;
  gender?: GenderType;
  email: string;
  userName: string;
  phone: string;
  updatedAt?: Date;
}
