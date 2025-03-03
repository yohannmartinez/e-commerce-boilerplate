<script lang="ts">
	import type { PageData } from './$types';
	import DesktopProduct from './components/desktop/desktopProduct.svelte';
	import MobileProduct from './components/mobile/mobileProduct.svelte';
	import { isMobile } from '@/stores/isMobile';

	export let data: PageData;
	$: product = data.product;
</script>

{#if $isMobile}
	<MobileProduct {product} />
{:else}
	<DesktopProduct {product} />
{/if}
