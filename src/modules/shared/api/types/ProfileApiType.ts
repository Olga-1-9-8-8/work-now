import { Database } from "../../services/supabase";

export type ProfileApiTypeInput = Database["public"]["Tables"]["profiles"]["Row"];
