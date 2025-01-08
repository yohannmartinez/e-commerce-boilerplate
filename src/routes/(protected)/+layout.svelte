<script lang="ts">
	import { session } from '@/stores/session';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let userSession;
	let loading: boolean = true;

	onMount(() => {
		const unsubscribe = session.subscribe((currentSession) => {
			userSession = currentSession;

			if (!userSession) {
				goto('/auth/login');
			}

			loading = false;
		});

		return unsubscribe;
	});
</script>

{#if loading}loading{:else}<slot />{/if}
