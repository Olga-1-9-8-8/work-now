import { ProfileType } from "../../../shared/services/auth";
import { ItemType } from "../../../shared/types";

export interface VacancyItemType extends Omit<ProfileType, "id" | "email">, ItemType {}
