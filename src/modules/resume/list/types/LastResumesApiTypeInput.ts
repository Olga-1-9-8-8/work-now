import { ResumeApiType } from "../../../shared/api";

export type LastResumesApiTypeInput = Pick<
  ResumeApiType,
  "creation_date" | "salary" | "education" | "applicants_quantity"
> & { profiles: { age: string | null; gender: string | null } | null };
