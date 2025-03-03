<script lang="ts">
	import type { PageData } from './$types';
	import Product from './components/product/product.svelte';
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import Title from '@/components/title/title.svelte';
	import Text from '@/components/text/text.svelte';

	export let data: PageData;
	$: products = data.products;
	$: page = data.page;
	$: productsCount = data.productsCount;
</script>

<div class="h-20 border-b"></div>
<div class="flex flex-col items-center justify-center">
	<div class="w-full max-w-7xl">
		<div class="mx-10 mt-20">
			<Title twClass="w-full text-center sm:text-left" type="casual">Notre collection</Title>
			<Text twClass="mt-3 w-full text-center sm:text-left" type="description">
				Découvrez les <b>{productsCount}</b> créations uniques Moblo Design
			</Text>
		</div>
		<div class="grid w-full grid-cols-1 gap-5 px-5 py-14 sm:grid-cols-2 xl:grid-cols-3">
			{#each products as product}
				<Product {product} />
			{/each}
		</div>
	</div>
	<div class="m-5 mb-20">
		<Pagination {page} totalCount={productsCount || 0} itemsPerPage={12} />
	</div>
</div>
