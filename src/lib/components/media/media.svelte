<script lang="ts">
	import { onMount } from 'svelte';
	import IconLoading from '~icons/tabler/loader-2';
	import type { ProductMedia } from '@/types/product';
	import Skeleton from '@/components/skeleton/skeleton.svelte';

	export let productMedia: ProductMedia | null | undefined;
	let isLoading = true;
	let mediaEl: HTMLImageElement | HTMLVideoElement | null = null;

	function onLoad() {
		isLoading = false;
	}

	onMount(() => {
		if (mediaEl) {
			if (mediaEl instanceof HTMLImageElement) {
				if (mediaEl.complete) {
					isLoading = false;
				} else {
					mediaEl.onload = onLoad;
				}
			} else if (mediaEl instanceof HTMLVideoElement) {
				if (mediaEl.readyState >= 3) {
					isLoading = false;
				} else {
					mediaEl.oncanplay = onLoad;
				}
			}
		}
	});
</script>

<div class="relative flex h-full w-full items-center justify-center">
	{#if productMedia}
		{#if productMedia.type === 'image'}
			<img
				bind:this={mediaEl}
				src={productMedia.link}
				alt="Moblo design {productMedia.type}"
				class="h-full w-full object-cover object-center transition-opacity duration-500 ease-in"
				style="opacity: {isLoading ? 0 : 1};"
			/>
		{/if}

		{#if productMedia.type === 'video'}
			<video
				bind:this={mediaEl}
				src={productMedia.link}
				autoplay
				loop
				muted
				playsinline
				class="h-full w-full object-cover object-center transition-opacity duration-500 ease-in"
				style="opacity: {isLoading ? 0 : 1};"
			></video>
		{/if}

		{#if isLoading}
			<div class="absolute flex h-full w-full items-center justify-center">
				<Skeleton class="absolute left-0 top-0 h-full w-full" />
				<span class="text-3xl text-gray-300">
					<IconLoading class="animate-spin" />
				</span>
			</div>
		{/if}
	{:else}
		<div class="absolute flex h-full w-full items-center justify-center">
			<Skeleton class="absolute left-0 top-0 h-full w-full" />
			<span class="text-3xl text-gray-300">
				<IconLoading class="animate-spin" />
			</span>
		</div>
	{/if}
</div>
