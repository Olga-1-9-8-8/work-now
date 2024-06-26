import { User } from "@supabase/supabase-js";
import { UserEntity } from "../../../types";

export interface AuthContextType {
  user?: User | null;
  isUserLoading: boolean;
  isAuthenticated: boolean;
  role: UserEntity;
  error: Error | null;
}
