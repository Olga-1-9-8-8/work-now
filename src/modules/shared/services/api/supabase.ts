import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/Database";

export const supabaseUrl = "https://zdlnblwgzglqsiraujmw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkbG5ibHdnemdscXNpcmF1am13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyOTc0NjEsImV4cCI6MjAyMjg3MzQ2MX0.Nh95sbXb1oshw7K351VLfeROLiGDU9k70VTNUATz6_M";
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
