import { supabase } from '@/supabase';
import { session } from '@/stores/session';

supabase.auth.onAuthStateChange((_event, currentSession) => {
	session.set(currentSession);
});
