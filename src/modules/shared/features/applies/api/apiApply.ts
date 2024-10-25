import { supabase } from "../../../services/api/supabase";
import { UserEntity } from "../../../types";

export const getApply = async (id: number, t: (key: string) => string) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }
  const item = session.user.user_metadata.role === UserEntity.Company ? "resume_id" : "vacancy_id";

  const { data: appliesData, error: appliesError } = await supabase
    .from("applies")
    .select("*")
    .eq("user_id", session.user.id)
    .eq(item, id)
    .maybeSingle();

  if (appliesError) {
    console.log(appliesError);
    throw new Error(t("shared.api.getApplyError"));
  }

  return appliesData;
};
