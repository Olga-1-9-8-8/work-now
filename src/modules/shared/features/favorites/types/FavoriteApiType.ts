import { Database } from "../../../services/supabase";

export type FavoriteApiType = Database["public"]["Tables"]["favorites"]["Row"];
