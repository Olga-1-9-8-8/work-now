import { GenderType, UserEntity } from "../../../types";

export interface ProfileType {
  id: string;
  age?: string;
  avatar?: string;
  gender?: GenderType;
  email: string;
  userName: string;
  phone: string;
  updatedAt?: Date;
  role: UserEntity;
}
