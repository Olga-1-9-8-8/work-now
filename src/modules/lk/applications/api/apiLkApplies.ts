import { supabase } from "../../../shared/services/api/supabase";

export const addResumesApply = async (id: number) => {
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

  const { data, error } = await supabase.from("applies").insert({
    user_id: session.user.id,
    resume_id: resumeData.id,
  });

  if (error) {
    console.log(error);
    throw new Error("Проблема с добавлением резюме в Отклики");
  }

  return data;
};

export const deleteApply = async (id: number) => {
  const { data, error } = await supabase.from("applies").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления элемента из Откликов");
  }

  return data;
};
