import { addDays, format } from "date-fns";
import { LanguageType } from "../../shared/configs";
import { supabase } from "../../shared/services/supabase";

export const getResumesAnalyticsAfterDate = async (
  date: string,
  t: (key: string) => string,
  language: LanguageType,
) => {
  const { data, error } = await supabase
    .from("resumes")
    .select(
      `creation_date, salary, education, applicants_quantity,cities_${language}, profiles(age, gender)`,
    )
    .not(`cities_${language}`, "is", null)
    .gte("creation_date", date)
    .lte("creation_date", format(addDays(new Date(), 1), "yyyy-MM-dd"));

  if (error) {
    console.log(error);
    throw new Error(t("home.api.getResumesAnalyticsError"));
  }

  return data;
};
