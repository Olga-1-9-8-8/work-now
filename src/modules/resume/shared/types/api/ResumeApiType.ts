import { Database } from "../../../../shared/services";
import { ProfileApiTypeInput } from "../../../../shared/services/auth";

export type ResumeApiType = Database["public"]["Tables"]["resumes"]["Row"] & {
  isInFavorites?: boolean;
  isInApplies?: boolean;
};

export interface ResumeWithProfileApiTypeInput extends ResumeApiType {
  profiles: ProfileApiTypeInput | null;
}
