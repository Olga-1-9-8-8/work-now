import { UserEntity } from "../../../types";

export type FavoriteType = {
  createdAt: Date;
  id: number;
  userId: string;
  resumeId?: number;
  vacancyId?: number;
  role: UserEntity;
};
