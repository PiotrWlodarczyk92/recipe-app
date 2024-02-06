import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://asnfuoiznokbmnqvjumq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzbmZ1b2l6bm9rYm1ucXZqdW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNDgyODIsImV4cCI6MjAyMjgyNDI4Mn0.WTPUID_Ppf-nMd-x3opXM8xwReCb5bp72L-fA57Ixc0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);