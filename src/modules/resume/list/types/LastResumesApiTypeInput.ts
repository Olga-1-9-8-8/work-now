import { ResumeApiType } from "../../shared/types";

export type LastResumesApiTypeInput = Pick<
  ResumeApiType,
  "creationDate" | "salary" | "education" | "applicantsQuantity"
>;
