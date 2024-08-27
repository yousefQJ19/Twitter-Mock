import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hqcaiqjdmhaabbprnbtc.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxY2FpcWpkbWhhYWJicHJuYnRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxMDEzNTksImV4cCI6MjAzOTY3NzM1OX0.kYC0gB_862H33El9Ldu4LV3GzpRIuPvE-DewV6XnY60"
export const supabase = createClient(supabaseUrl, supabaseKey)






