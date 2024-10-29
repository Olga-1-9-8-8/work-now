import { supabase } from "../../../services/supabase";

interface AddViewParams {
  id: number;
  count: number;
  isHiring: boolean;
  userId?: string;
  t: (key: string) => string;
}

export const addView = async ({ id, count, isHiring, userId, t }: AddViewParams) => {
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
    throw new Error(t("shared.api.addViewError"));
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
    throw new Error(
      isHiring ? t("shared.api.updateViewVacancyError") : t("shared.api.updateViewResumeError"),
    );
  }

  const { error } = await supabase.from("views").insert({
    user_id: userId,
    [columnName]: id,
  });

  if (error) {
    console.log(error);
    throw new Error(isHiring ? t("shared.api.addViewVacancy") : t("shared.api.addViewResume"));
  }

  return { isHiring, id };
};

interface GetViewParams {
  id: number;
  isHiring: boolean;
  t: (key: string) => string;
}

export const getAllViews = async ({ id, isHiring, t }: GetViewParams) => {
  const columnName = isHiring ? "vacancy_id" : "resume_id";

  const { data: views, error: viewError } = await supabase
    .from("views")
    .select("created_at,profiles(username,id)")
    .eq(columnName, id);

  if (viewError) {
    console.error(viewError);
    throw new Error(t("shared.api.getAllViewsError"));
  }

  return views;
};
