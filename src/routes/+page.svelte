<script>
	import Text from '@/components/text/text.svelte';
	import Title from '@/components/title/title.svelte';

	import IconRight from '~icons/tabler/arrow-right';
	import IconWood from '~icons/tabler/wood';
	import IconCollection from '~icons/tabler/heart-handshake';
</script>

<div class="h-20 border-b"></div>
<div class="box-border px-5">
	<div class="flex w-full items-center justify-center py-20 md:py-40">
		<div class="flex max-w-[600px] flex-col items-center justify-center">
			<Title twClass=" text-center mt-5">L’élégance du bois, l’âme du fait main</Title>
			<Text twClass="text-center mt-10 text-[#5e5e5e]"
				>Chez Moblo Design, chaque pièce est unique, façonnée à la main avec des essences de bois
				naturelles. Nous créons des meubles qui allient esthétique, authenticité et durabilité, pour
				sublimer vos espaces avec chaleur et caractère.</Text
			>
			<div class="mt-10 flex flex-col gap-5 md:flex-row">
				<a
					href="test"
					class="flex w-[350px] items-center justify-between rounded-xl border p-5 duration-[0.5s] hover:bg-gray-100"
				>
					<Text twClass="flex justify-center items-center gap-2"><IconWood />L'histoire Moblo</Text>
					<div class="w-min rounded-md border p-3">
						<IconRight />
					</div>
				</a>
				<a
					href="/collection"
					class="flex w-[350px] items-center justify-between rounded-xl bg-primary p-5 text-white duration-[0.5s] hover:bg-primary/80"
				>
					<Text twClass="flex justify-center items-center gap-2"
						><IconCollection />La collection Moblo</Text
					>
					<div class="w-min rounded-md border p-3">
						<IconRight />
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
