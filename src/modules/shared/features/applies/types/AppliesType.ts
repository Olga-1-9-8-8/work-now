import { UserEntity } from "../../../types";

export type AppliesType = {
  createdAt: Date;
  id: number;
  userId: string;
  resumeId?: number;
  vacancyId?: number;
  role: UserEntity;
};
