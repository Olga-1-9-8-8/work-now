import { FavoriteApiType } from "../types/FavoriteApiType";
import { FavoriteType } from "../types/FavoriteType";

export const mapProfileFavorite = (resume: FavoriteApiType): FavoriteType => {
  return {
    ...resume,
    createdAt: new Date(resume.created_at),
    userId: resume.user_Id,
    name: resume.name ?? undefined,
    position: resume.position ?? undefined,
  };
};

export const mapProfileFavorites = (favorites: FavoriteApiType[]) => {
  return favorites.map((favorite) => mapProfileFavorite(favorite));
};
