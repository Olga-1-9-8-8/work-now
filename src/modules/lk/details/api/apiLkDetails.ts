import { supabase } from "../../../shared/services/api/supabase";
import { LkDetailsFormType } from "../types/LkDetailsFormType";

export const getSettings = async () => {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Проблема с загрузкой настроек из базы данных");
  }
  return data;
};

export const updateSettings = async (newSettings: Partial<LkDetailsFormType>) => {
  const hasImagePath = newSettings.image?.name.startsWith?.(import.meta.env.VITE_SUPABASE_URL);
  const imageName = `${Math.random()}-${newSettings.image?.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newSettings.image
    : `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${imageName}`;

  console.log(imagePath);
  const { data, error } = await supabase
    .from("settings")
    // newSettings.image === undefined ? null : imagePat
    .update({ ...newSettings, image: undefined })
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Ошибка при обновлении настроек");
  }

  if (hasImagePath || !newSettings.image) return data;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(imageName, newSettings.image);

  if (storageError) {
    throw new Error("Settings image could not be uploaded and the setting was not created");
  }
  return data;
};
