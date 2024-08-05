import { VacancyApiType } from "../../../shared/api";
import { supabase } from "../../../shared/services";

export const createEditVacancy = async (
  newVacancy: Omit<VacancyApiType, "id"> & { id?: number },
) => {
  const query = newVacancy.id
    ? supabase.from("vacancies").update(newVacancy).eq("id", newVacancy.id)
    : supabase.from("vacancies").insert([newVacancy]);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Ошибка при создании вакансии");
  }

  return data;
};
