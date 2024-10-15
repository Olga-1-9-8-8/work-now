import { supabase } from "../../../shared/services";

interface Counts {
  resumesCount: number;
  vacanciesCount: number;
  favoritesCount: number;
  appliesCount: number;
}

export const getTotalCounts = async (t: (key: string) => string) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const { data, error: rpcError } = await supabase.rpc("get_total_counts");

  if (rpcError) {
    console.log(rpcError);
    throw new Error(t("lk.api.getTotalCountsError"));
  }

  const counts = data as unknown as Counts;
  const { resumesCount, vacanciesCount, favoritesCount, appliesCount } = counts;

  return { resumesCount, vacanciesCount, favoritesCount, appliesCount };
};
