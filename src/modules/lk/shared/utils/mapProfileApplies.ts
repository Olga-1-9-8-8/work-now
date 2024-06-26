import { AppliesApiType } from "../types/AppliesApiType";
import { AppliesType } from "../types/AppliesType";

export const mapProfileApply = (apply: AppliesApiType): AppliesType => {
  const {
    created_at: createdAt,
    user_id: userId,
    name,
    position,
    resume_id: resumeId,
    ...applyData
  } = apply;

  return {
    createdAt: new Date(createdAt),
    userId,
    name: name ?? undefined,
    position: position ?? undefined,
    resumeId,
    ...applyData,
  };
};

export const mapProfileApplies = (applies: AppliesApiType[]) => {
  return applies.map((apply) => mapProfileApply(apply));
};
