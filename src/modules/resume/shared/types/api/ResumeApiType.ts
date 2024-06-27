import { Database } from "../../../../shared/services";

export type ProfileApiTypeInput = Database["public"]["Tables"]["profiles"]["Row"];
export type ResumeApiType = Database["public"]["Tables"]["resumes"]["Row"] & {
  isInFavorites?: boolean;
  isInApplies?: boolean;
};

export interface ResumeWithProfileApiTypeInput extends ResumeApiType {
  profiles: ProfileApiTypeInput | null;
}
