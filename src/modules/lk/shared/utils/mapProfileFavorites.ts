import { FavoriteApiType } from "../types/FavoriteApiType";
import { FavoriteType } from "../types/FavoriteType";

export const mapProfileFavorite = (favorite: FavoriteApiType): FavoriteType => {
  const {
    created_at: createdAt,
    user_id: userId,
    name,
    position,
    resume_id: resumeId,
    ...favoriteData
  } = favorite;

  return {
    createdAt: new Date(createdAt),
    userId,
    name: name ?? undefined,
    position: position ?? undefined,
    resumeId,
    ...favoriteData,
  };
};

export const mapProfileFavorites = (favorites: FavoriteApiType[]) => {
  return favorites.map((favorite) => mapProfileFavorite(favorite));
};
