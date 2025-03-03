<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Pagination from './index';

	export let page: number;
	export let totalCount: number;
	export let itemsPerPage: number;

	const changePage = (newPage: number) => {
		const url = new URL(window.location.href);
		url.searchParams.set('page', newPage.toString());
		goto(url.href);
	};
</script>

<Pagination.Root
	{page}
	count={totalCount}
	perPage={itemsPerPage}
	let:pages
	let:currentPage
	onPageChange={changePage}
>
	<Pagination.Content>
		<Pagination.Item>
			<Pagination.PrevButton />
		</Pagination.Item>
		{#each pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
			{:else}
				<Pagination.Item>
					<Pagination.Link {page} isActive={currentPage == page.value}>
						{page.value}
					</Pagination.Link>
				</Pagination.Item>
			{/if}
		{/each}
		<Pagination.Item>
			<Pagination.NextButton />
		</Pagination.Item>
	</Pagination.Content>
</Pagination.Root>
