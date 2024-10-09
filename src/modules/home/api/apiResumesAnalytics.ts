import { addDays, format } from "date-fns";
import { supabase } from "../../shared/services";

export const getResumesAnalyticsAfterDate = async (date: string, t: (key: string) => string) => {
  const { data, error } = await supabase
    .from("resumes")
    .select("creation_date, salary, education, applicants_quantity, profiles(age, gender)")
    .gte("creation_date", date)
    .lte("creation_date", format(addDays(new Date(), 1), "yyyy-MM-dd"));

  if (error) {
    console.log(error);
    throw new Error(t("home.api.getResumesAnalyticsError"));
  }

  return data;
};
