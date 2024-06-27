import { supabase } from "../../../shared/services/api/supabase";

export const getResume = async (id: string) => {
  const { data, error } = await supabase
    .from("resumes")
    .select("*,profiles(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой резюме из базы данных");
  }

  if (!data) return null;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return { ...data, isInFavorites: undefined, isInApplies: undefined };
  }

  const { data: favoritesData, error: favoritesError } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_id", session.user.id)
    .eq("resume_id", data.id)
    .maybeSingle();

  if (favoritesError) {
    console.log(favoritesError);
    throw new Error("Проблема с загрузкой избранного из базы данных");
  }

  const { data: appliesData, error: appliesError } = await supabase
    .from("applies")
    .select("*")
    .eq("user_id", session.user.id)
    .eq("resume_id", data.id)
    .maybeSingle();

  if (appliesError) {
    console.log(appliesError);
    throw new Error("Проблема с загрузкой откликов из базы данных");
  }

  return { ...data, isInFavorites: !!favoritesData, isInApplies: !!appliesData };
};
