<script lang="ts">
	import SlidingPanel from '@/components/slidingPanel/slidingPanel.svelte';
	import { Button } from '@/components/button';
	import IconPlus from '~icons/tabler/plus';
	import IconArrowLeft from '~icons/tabler/arrow-left';
	import IconProfile from '~icons/tabler/user';
	import IconCart from '~icons/tabler/shopping-cart';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	export let product;
	let emblaApi;
	let slidesInView: number[] = [];
</script>

<div class="relative h-[60px] w-full">
	<div
		class="absolute left-0 top-0 z-20 flex h-[60px] w-full justify-between gap-6 bg-white px-6 text-lg font-bold"
	>
		<div class="flex items-center gap-6">
			<IconArrowLeft />
			<h1 class="line-clamp-1 w-full text-base font-semibold">{product.name}</h1>
		</div>

		<div class="flex items-center gap-6">
			<IconProfile />
			<IconCart />
		</div>
	</div>
</div>

<div
	class="embla h-[calc(100vh-125px-60px)] w-screen overflow-hidden"
	use:emblaCarouselSvelte={{ options: { axis: 'y' }, plugins: [] }}
	onemblaInit={(event) => {
		emblaApi = event.detail;
		emblaApi.on('slidesInView', (e) => {
			slidesInView = e.slidesInView();
		});
	}}
>
	<div class="embla__container flex h-[calc(100vh-125px-60px)] w-full flex-col">
		{#each product.productMedias as productMedia, mediaIndex}
			{#if productMedia.type === 'video'}
				<video
					src={productMedia.link}
					autoplay
					loop
					muted
					playsinline
					class="embla__slide video h-[calc(100vh-125px-60px)] w-full flex-[0_0_calc(100vh-125px-60px)] object-cover object-center"
				></video>
			{/if}
			{#if productMedia.type === 'image'}
				<img
					src={productMedia.link}
					alt="{product.name} image"
					class="embla__slide h-[calc(100vh-125px-60px)] w-full flex-[0_0_calc(100vh-125px-60px)] object-cover object-center"
				/>
			{/if}
		{/each}
	</div>
</div>
<SlidingPanel topPositionY={230}>
	<div class="h-[108px]">
		<div class="mt-2 flex items-center justify-between gap-3">
			<h1 class="line-clamp-1 text-left text-sm font-medium">{product.name}</h1>
			<span class="text-sm font-semibold">{product.price}€</span>
		</div>
		<Button class="mt-3 w-full bg-black py-6 font-bold"
			><IconPlus class="mr-1" />AJOUTER AU PANIER</Button
		>
	</div>
	<div class="h-[2000px] bg-yellow-200">df</div>
</SlidingPanel>
