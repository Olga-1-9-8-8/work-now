import { supabase } from "../../../shared/services/supabase";
import { CreateEditVacancyType } from "../types";

export const createEditVacancy = async (
  newVacancy: CreateEditVacancyType,
  t: (key: string) => string,
) => {
  const query = newVacancy.id
    ? supabase.from("vacancies").update(newVacancy).eq("id", newVacancy.id)
    : supabase.from("vacancies").insert([newVacancy]);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error(t("vacancy.api.createEditVacancyError"));
  }

  return data;
};
