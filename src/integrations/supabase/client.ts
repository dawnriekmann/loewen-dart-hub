// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yghzrbvqlrghamzchhbf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnaHpyYnZxbHJnaGFtemNoaGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0Njc2NDQsImV4cCI6MjA2NTA0MzY0NH0.zip-v0pqisbXA5cVU_6tWQdFFM-aV5njbi0ajH5ZOBA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);