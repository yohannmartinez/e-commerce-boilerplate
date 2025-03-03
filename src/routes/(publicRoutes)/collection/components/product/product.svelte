<script lang="ts">
	import Text from '@/components/text/text.svelte';
	import type { ProductWithMedias } from '@/types/product';

	import IconMaterials from '~icons/tabler/wood';
	import IconSize from '~icons/tabler/ruler-2';
	import IconRight from '~icons/tabler/arrow-right';
	import Media from '@/components/media/media.svelte';

	export let product: ProductWithMedias;
</script>

<a
	href="/collection/{product.id}"
	class="mb-10 flex cursor-pointer flex-col gap-5 rounded-2xl border border-white bg-white p-5 duration-[0.5s] hover:border-gray-200 sm:hover:scale-[1.03]"
>
	<div
		class="relative flex h-[530px] items-center justify-center overflow-hidden rounded-xl sm:h-[350px] md:h-[530px]"
	>
		<Media productMedia={product.productMedias[0]} />
		<div
			class="absolute bottom-5 right-5 flex w-min items-center justify-center rounded-lg bg-primary p-3 text-white"
		>
			<IconRight />
		</div>
	</div>
	<div class="flex flex-col gap-1">
		<div class="flex justify-between">
			<Text twClass="font-semibold">{product.name}</Text>
		</div>
		<Text type="description" twClass="mb-3"
			>Ajouté le {new Date(product.created_at).toLocaleDateString()}</Text
		>
		<div class="flex gap-3">
			<div class="flex items-center justify-center gap-2 rounded-lg border px-3 py-2">
				<IconSize /><Text type="little">{product.dimensions}</Text>
			</div>
			<div class="flex items-center justify-center gap-2 rounded-lg border px-3 py-2">
				<IconMaterials /><Text type="little">{product.materials}</Text>
			</div>
		</div>
	</div>
</a>
