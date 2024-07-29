import { VacancyApiType } from "../../../shared/api";
import { supabase } from "../../../shared/services";

export const createEditVacancy = async (
  newVacancy: Omit<VacancyApiType, "id"> & { id?: number },
) => {
  let query: any = supabase.from("vacancies");

  if (!newVacancy.id) {
    query = query.insert([newVacancy]);
  }
  if (newVacancy.id) {
    query = query.update(newVacancy).eq("id", newVacancy.id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Ошибка при создании вакансии");
  }

  return data;
};

export const deleteVacancy = async (id: number) => {
  const { data, error } = await supabase.from("vacancies").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления вакансии");
  }
  return data;
};
