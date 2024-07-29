import { Database } from "./database.types";
import { ProfileApiTypeInput } from "./ProfileApiType";

export type ResumeApiType = Database["public"]["Tables"]["resumes"]["Row"] & {
  isInFavorites?: boolean;
  isInApplies?: boolean;
};

export interface ResumeWithProfileApiTypeInput extends ResumeApiType {
  profiles: ProfileApiTypeInput | null;
}
