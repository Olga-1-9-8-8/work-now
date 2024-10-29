import { Database } from "../../../services/supabase";

export type AppliesApiType = Database["public"]["Tables"]["applies"]["Row"];
