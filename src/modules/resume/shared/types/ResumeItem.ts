import { ProfileType } from "../../../shared/services/auth";
import { ItemType } from "../../../shared/types";

export interface ResumeItem extends Omit<ProfileType, "id" | "email">, Omit<ItemType, "id"> {
  id: number;
}
