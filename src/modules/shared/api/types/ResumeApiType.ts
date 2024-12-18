import { Database } from "../../services/supabase";
import { ProfileApiTypeInput } from "./ProfileApiType";

export type ResumeApiType = Database["public"]["Tables"]["resumes"]["Row"];

export interface ResumeWithProfileApiTypeInput extends ResumeApiType {
  profiles: ProfileApiTypeInput | null;
}
