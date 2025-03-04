<script lang="ts">
	import Media from '@/components/media/media.svelte';
	import Text from '@/components/text/text.svelte';
	import Title from '@/components/title/title.svelte';
	import IconMaterials from '~icons/tabler/wood';
	import IconSize from '~icons/tabler/ruler-2';
	import IconRight from '~icons/tabler/arrow-right';
	import type { ProductWithMedias } from '@/types/product';

	export let similarProducts: ProductWithMedias[];
</script>

<div class="my-40">
	<div class="mx-5">
		<Title type="medium">Ils pourraient aussi vous plaire</Title>
		<Text twClass="mt-2" type="description"
			>Voici une petite séléction de ce qui pourrait vous intéresser</Text
		>
	</div>
	<div class="mt-10 grid h-fit flex-1 grid-cols-2 gap-5 rounded-xl lg:grid-cols-3">
		{#each similarProducts as similarProduct}
			{@const productMedia = similarProduct.productMedias.sort(
				(mediaA, mediaB) => mediaA.displayOrder - mediaB.displayOrder
			)[0]}
			<a
				href="/collection/{similarProduct.id}"
				class="mb-10 flex flex-col gap-5 rounded-2xl border border-white p-5 duration-[0.5s] hover:border-gray-200 sm:hover:scale-[1.03]"
			>
				<div class="relative h-[350px] overflow-hidden rounded-xl md:h-[500px]">
					<Media productMedia={productMedia || null} />
					<div
						class="absolute bottom-5 right-5 flex w-min items-center justify-center rounded-lg bg-primary p-3 text-white"
					>
						<IconRight />
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<div class="flex justify-between">
						<Text twClass="font-semibold">{similarProduct.name}</Text>
					</div>
					<Text type="description" twClass="mb-3"
						>Ajouté le {new Date(similarProduct.created_at).toLocaleDateString()}</Text
					>
					<div class="flex gap-3">
						<div class="flex items-center justify-center gap-2 rounded-lg border px-3 py-2">
							<IconSize /><Text type="little">{similarProduct.dimensions}</Text>
						</div>
						<div class="flex items-center justify-center gap-2 rounded-lg border px-3 py-2">
							<IconMaterials /><Text type="little">{similarProduct.materials}</Text>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
