<script lang="ts">
	import { supabase } from '@/supabase';

	async function loginWithGoogle() {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google'
		});
		if (error) {
			console.error('Erreur de connexion OAuth :', error.message);
		}
	}
</script>

<button on:click={loginWithGoogle}>google</button>
