import { ResumeItem } from "../../shared/types";

export type LastResumesApiTypeInput = Pick<
  ResumeItem,
  "creationDate" | "salary" | "education" | "applicantsQuantity"
>;
