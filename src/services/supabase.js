import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ssbetgocuaccmpxshrny.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzYmV0Z29jdWFjY21weHNocm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MDc1MjgsImV4cCI6MjA3NjQ4MzUyOH0.zvku79hcILUzqGQ5LGcveOCfSOuISNc8dWMlyVzhEhk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
