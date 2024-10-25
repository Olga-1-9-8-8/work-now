import { supabase } from "../../../shared/services";

export const getVacancy = async (t: (key: string) => string, id?: number) => {
  if (!id) return null;
  const { data, error } = await supabase
    .from("vacancies")
    .select("*,profiles(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error(t("lk.vacancies.api.getVacancyError"));
  }

  if (!data) return null;

  return {
    ...data,
    profiles: data.profiles ? { ...data.profiles } : null,
  };
};

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
