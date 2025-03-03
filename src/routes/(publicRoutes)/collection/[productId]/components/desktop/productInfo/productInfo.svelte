<script lang="ts">
	import Text from '@/components/text/text.svelte';
	import Title from '@/components/title/title.svelte';
	import type { Product } from '@/types/product';
	import IconSize from '~icons/tabler/ruler-2';
	import IconMaterials from '~icons/tabler/wood';
	import IconSee from '~icons/tabler/eye';
	import IconRight from '~icons/tabler/arrow-right';
	import IconPrice from '~icons/tabler/coins';

	export let product: Product;
</script>

<div class="max-w-[500px] flex-1">
	<div class="sticky top-5 w-full rounded-xl border p-5">
		<Title type="medium">Description</Title>
		<Text type="description" twClass=" mt-3">{product.description}</Text>

		<div class="mt-5 flex flex-wrap gap-3">
			<div class="flex items-center justify-center gap-2 rounded-lg border px-3 py-2">
				<IconPrice /><Text type="little">{product.price}€</Text>
			</div>
			<div class="flex items-center justify-center gap-2 rounded-lg border px-3 py-2">
				<IconSize /><Text type="little">{product.dimensions}</Text>
			</div>
			<div class="flex items-center justify-center gap-2 rounded-lg border px-3 py-2">
				<IconMaterials /><Text type="little">{product.materials}</Text>
			</div>
		</div>

		<a
			href="/collection"
			class="mt-5 flex w-full items-center justify-between rounded-lg bg-primary p-5 text-white duration-[0.5s] hover:bg-primary/80"
		>
			<Text twClass="flex justify-center items-center gap-2">Voir sur Etsy</Text>
			<div class="w-min rounded-md border p-2">
				<IconRight />
			</div>
		</a>
	</div>
</div>
