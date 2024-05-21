import { Database } from "../../../../shared/services";

export type UserApiTypeInput = Database["public"]["Tables"]["users"]["Row"];
export type ResumeApiType = Database["public"]["Tables"]["resumes"]["Row"];

export interface ResumeWithUserApiTypeInput extends ResumeApiType {
  users: UserApiTypeInput | null;
}
