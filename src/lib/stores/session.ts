import type { Session } from '@supabase/supabase-js';
import { writable, type Writable } from 'svelte/store';

export const session: Writable<Session | null> = writable(null);
