import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yuwpfvgwhjwmamivyeik     .supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1d3Bmdmd3aGp3bWFtaXZ5ZWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNDQxMzQsImV4cCI6MjA2NjYyMDEzNH0.UZMmqsP-l6H_F1mAfvMtv_0OGH2uNSQFujLLrNJFeFo";

export const supabase = createClient(supabaseUrl, supabaseKey);
