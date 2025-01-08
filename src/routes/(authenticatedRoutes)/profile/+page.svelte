<script lang="ts">
	import { supabase } from '@/supabase';

	async function logout() {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error('Erreur de connexion OAuth :', error.message);
		}
	}
</script>

<div>protected</div>
<button on:click={logout}>logout</button>
