import { User } from "@supabase/supabase-js";

export interface AuthContextType {
  user?: User | null;
  isUserLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
}
