import { UniversalItemApiTypeInput } from "../../shared/api";

export type UniversalItemAnalyticsApiTypeInput = Pick<
  UniversalItemApiTypeInput,
  "creation_date" | "salary" | "education" | "applicants_quantity"
> & { profiles: { age: string | null; gender: string | null } | null };
