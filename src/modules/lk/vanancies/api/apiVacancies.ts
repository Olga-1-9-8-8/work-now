import { supabase } from "../../../shared/services/supabase";

export const deleteVacancy = async (id: number, t: (key: string) => string) => {
  const { data, error } = await supabase
    .from("vacancies")
    .delete()
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    console.log(error);
    throw new Error(t("lk.vacancies.api.deleteError"));
  }
  return data;
};
