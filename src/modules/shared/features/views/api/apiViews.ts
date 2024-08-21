import { supabase } from "../../../services";

interface AddViewParams {
  id: number;
  count: number;
  isHiring: boolean;
  userId?: string;
}

export const addView = async ({ id, count, isHiring, userId }: AddViewParams) => {
  if (!userId) return null;
  const column = isHiring ? "vacancies" : "resumes";
  const columnName = isHiring ? "vacancy_id" : "resume_id";

  const { data: userAlreadyViewedItem, error: viewCheckError } = await supabase
    .from("views")
    .select("*")
    .eq("user_id", userId)
    .eq(columnName, id)
    .maybeSingle();

  if (viewCheckError) {
    console.error(viewCheckError);
    throw new Error("Ошибка при проверке просмотров");
  }

  if (userAlreadyViewedItem) {
    return null;
  }

  const { error: resumeUpdateError } = await supabase
    .from(column)
    .update({
      views: count + 1,
    })
    .eq("id", id)
    .single();

  if (resumeUpdateError) {
    console.log(resumeUpdateError);
    throw new Error(`Ошибка при обновлении ${isHiring ? "вакансии" : "резюме"}, после просмотра`);
  }

  const { error } = await supabase.from("views").insert({
    user_id: userId,
    [columnName]: id,
  });

  if (error) {
    console.log(error);
    throw new Error(`Проблема с добавлением ${isHiring ? " вакансии " : "резюме"} в Просмотры`);
  }

  return { isHiring, id };
};

interface GetViewParams {
  id: number;
  isHiring: boolean;
}

export const getAllViews = async ({ id, isHiring }: GetViewParams) => {
  const columnName = isHiring ? "vacancy_id" : "resume_id";

  const { data: views, error: viewError } = await supabase
    .from("views")
    .select("created_at,profiles(username,id)")
    .eq(columnName, id);

  if (viewError) {
    console.error(viewError);
    throw new Error("Ошибка при получении просмотров");
  }

  return views;
};
