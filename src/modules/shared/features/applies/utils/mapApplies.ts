import { UserEntity } from "../../../types";
import { AppliesApiType } from "../types/AppliesApiType";
import { AppliesType } from "../types/AppliesType";

export const mapApply = (apply: AppliesApiType, role: UserEntity): AppliesType => {
  const {
    created_at: createdAt,
    user_id: userId,
    resume_id: resumeId,
    vacancy_id: vacancyId,
    ...applyData
  } = apply;

  return {
    createdAt: new Date(createdAt),
    userId,
    resumeId: resumeId ?? undefined,
    vacancyId: vacancyId ?? undefined,
    role,
    ...applyData,
  };
};

export const mapApplies = (applies: AppliesApiType[], role: UserEntity) => {
  return applies.map((apply) => mapApply(apply, role));
};
