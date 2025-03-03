<script lang="ts">
	import { cn } from '@/utils';

	type TitleType = 'casual' | 'little' | 'description';

	export let type: TitleType = 'casual';
	export let twClass: string = 'text';

	const typeClass: Record<TitleType, string> = {
		casual: 'font-medium md:text-xl tracking-[-0.5px] text-lg',
		description: 'font-base md:text-md tracking-[-0.5px] text-md text-[#5e5e5e]',
		little: 'text-sm tracking-[-0.5px] font-base'
	};
</script>

<h1 class={cn(`${typeClass[type]}`, twClass)}><slot /></h1>
