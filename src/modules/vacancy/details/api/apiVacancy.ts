import { supabase } from "../../../shared/services/supabase";

export const getVacancy = async (t: (key: string) => string, id?: number) => {
  if (!id) return null;
  const { data, error } = await supabase
    .from("vacancies")
    .select("*,profiles(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error(t("vacancy.api.getVacancyError"));
  }

  if (!data) return null;

  return {
    ...data,
    profiles: data.profiles ? { ...data.profiles } : null,
  };
};
