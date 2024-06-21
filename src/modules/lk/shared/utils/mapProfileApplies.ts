import { AppliesApiType } from "../types/AppliesApiType";
import { AppliesType } from "../types/AppliesType";

export const mapProfileApply = (resume: AppliesApiType): AppliesType => {
  return {
    ...resume,
    createdAt: new Date(resume.created_at),
    userId: resume.user_Id,
    name: resume.name ?? undefined,
    position: resume.position ?? undefined,
  };
};

export const mapProfileApplies = (applies: AppliesApiType[]) => {
  return applies.map((apply) => mapProfileApply(apply));
};
