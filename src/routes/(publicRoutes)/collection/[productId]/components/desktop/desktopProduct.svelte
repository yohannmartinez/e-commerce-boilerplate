<script lang="ts">
	import type { ProductWithMedias } from '@/types/product';
	import ProductInfo from './productInfo/productInfo.svelte';
	import Title from '@/components/title/title.svelte';
	import IconReturn from '~icons/tabler/arrow-left';
	import Text from '@/components/text/text.svelte';
	import Media from '@/components/media/media.svelte';

	export let product: ProductWithMedias;
</script>

<div class="h-20 border-b"></div>

<div class="mx-14 mt-20 flex flex-col items-center justify-center">
	<div class="w-full max-w-7xl">
		<div class="flex w-full flex-col">
			<div class="flex items-center gap-3">
				<a
					href="/collection"
					class="h-min w-min rounded-full border p-2 duration-[0.5s] hover:scale-[1.05]"
					><IconReturn />
				</a>
				<Text type="little">Retour à la collection Moblo</Text>
			</div>
			<Title twClass="mt-3">{product.name}</Title>
		</div>

		<div class="my-20 flex w-full gap-5">
			<div class="grid h-fit flex-1 grid-cols-1 gap-5 rounded-xl lg:grid-cols-2">
				{#each product.productMedias as media}
					<div class="1200:h-[500px] h-[500px] overflow-hidden rounded-xl lg:h-[350px]">
						<Media productMedia={media} />
					</div>
				{/each}
			</div>

			<ProductInfo {product} />
		</div>
	</div>
</div>
