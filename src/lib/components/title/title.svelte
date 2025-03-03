<script lang="ts">
	import { cn } from '@/utils';

	type TitleType = 'casual' | 'medium';

	export let type: TitleType = 'casual';
	export let twClass: string = 'text';

	const typeClass: Record<TitleType, string> = {
		casual: 'tracking-[-3px] font-semibold md:text-7xl  text-6xl leading-[70px]',
		medium: 'tracking-[-1.5px] font-semibold text-3xl'
	};
</script>

<h1 class={cn(`${typeClass[type]}`, twClass)}><slot /></h1>
