<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '@/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={cn('animate-pulse rounded-md bg-black/10', className)} {...$$restProps}></div>
