import { supabase } from "../../../shared/services/api/supabase";

export const addResumesFavorite = async (id: number) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const { data: resumeData, error: resumeError } = await supabase
    .from("resumes")
    .select("*,profiles(*)")
    .eq("id", id)
    .single();

  if (resumeError) {
    console.log(resumeError);
    throw new Error("Данное резюме не найдено в базе данных");
  }

  const { data, error } = await supabase.from("favorites").insert({
    user_id: session.user.id,
    resume_id: resumeData.id,
  });

  if (error) {
    console.log(error);
    throw new Error("Проблема с добавлением резюме в Избранное");
  }

  return data;
};

export const deleteFavorite = async (id: number) => {
  const { data, error } = await supabase.from("favorites").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления отклика из Избранного");
  }

  return data;
};
