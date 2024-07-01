import { UserEntity } from "../../../types";
import { FavoriteApiType } from "../types/FavoriteApiType";
import { FavoriteType } from "../types/FavoriteType";

export const mapFavorite = (favorite: FavoriteApiType, role: UserEntity): FavoriteType => {
  const {
    created_at: createdAt,
    user_id: userId,
    resume_id: resumeId,
    vacancy_id: vacancyId,
    ...favoriteData
  } = favorite;

  return {
    createdAt: new Date(createdAt),
    userId,
    resumeId: resumeId ?? undefined,
    vacancyId: vacancyId ?? undefined,
    role,
    ...favoriteData,
  };
};

export const mapFavorites = (favorites: FavoriteApiType[], role: UserEntity) => {
  return favorites.map((favorite) => mapFavorite(favorite, role));
};
