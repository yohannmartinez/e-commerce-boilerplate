<script lang="ts">
	import { Pagination as PaginationPrimitive } from 'bits-ui';
	import ChevronRight from '~icons/tabler/chevron-right';
	import { Button } from '$lib/components/button/index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = PaginationPrimitive.NextButtonProps;
	type $$Events = PaginationPrimitive.NextButtonEvents;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<PaginationPrimitive.NextButton asChild let:builder>
	<Button
		variant="ghost"
		class={cn('gap-1 pr-2.5', className)}
		builders={[builder]}
		on:click
		{...$$restProps}
	>
		<slot>
			<span class="hidden sm:block">Suivant</span>
			<ChevronRight class="h-4 w-4" />
		</slot>
	</Button>
</PaginationPrimitive.NextButton>
