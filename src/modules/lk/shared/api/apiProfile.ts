import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { supabase } from "../../../shared/services/api/supabase";

interface GetProfileProps {
  page: number;
}

export const getProfileResumes = async ({ page }: GetProfileProps) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  let query = supabase
    .from("resumes")
    .select("*", { count: "exact" })
    .eq("user_Id", session.user.id);

  query = query.order("updated_At", { ascending: false });

  if (page) {
    const from = (page - 1) * QUANTITY_OF_ITEMS_ON_ONE_PAGE;
    const to = from + QUANTITY_OF_ITEMS_ON_ONE_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой резюме профиля из базы данных");
  }

  return { data, totalCount: count };
};

export const getProfileApplies = async ({ page }: GetProfileProps) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }
  let query = supabase
    .from("applies")
    .select("*", { count: "exact" })
    .eq("user_Id", session.user.id);

  if (page) {
    const from = (page - 1) * QUANTITY_OF_ITEMS_ON_ONE_PAGE;
    const to = from + QUANTITY_OF_ITEMS_ON_ONE_PAGE - 1;
    query = query.range(from, to);
  }

  query = query.order("created_at", { ascending: false });

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой откликов на резюме из базы данных");
  }
  return { data, totalCount: count };
};

export const getProfileFavorites = async ({ page }: GetProfileProps) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  let query = supabase
    .from("favorites")
    .select("*", { count: "exact" })
    .eq("user_Id", session.user.id);

  query = query.order("created_at", { ascending: false });

  if (page) {
    const from = (page - 1) * QUANTITY_OF_ITEMS_ON_ONE_PAGE;
    const to = from + QUANTITY_OF_ITEMS_ON_ONE_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой избранного профиля из базы данных");
  }

  return { data, totalCount: count };
};
