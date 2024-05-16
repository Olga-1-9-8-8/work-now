import { Database } from "../../../../shared/services";

export type UserApiTypeInput = Database["public"]["Tables"]["users"]["Row"];
export type ResumeApiTypeInput = Database["public"]["Tables"]["resumes"]["Row"];

export interface ResumeWithUserApiTypeInput extends ResumeApiTypeInput {
  users: UserApiTypeInput | null;
}
