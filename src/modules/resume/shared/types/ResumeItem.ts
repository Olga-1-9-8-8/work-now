import { ProfileType } from "../../../shared/services/auth/types/ProfileType";
import { ItemType } from "../../../shared/types";

export interface ResumeItem extends Omit<ProfileType, "id" | "email">, ItemType {}
