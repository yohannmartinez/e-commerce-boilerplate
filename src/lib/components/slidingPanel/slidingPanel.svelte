<script lang="ts">
	import type { CupertinoPane } from 'cupertino-pane';
	import { onDestroy, onMount } from 'svelte';
	import Skeleton from '../skeleton/skeleton.svelte';

	let pane: CupertinoPane | undefined;
	let bottomPositionY: number = 130;

	export let topPositionY: number;
	export let isLoaded: boolean = false;
	export let showBackdrop: boolean = true;

	const changeOpacity = (val: number): void => {
		if (showBackdrop) {
			const backdrop = document.querySelector('.backdropContainer') as HTMLElement;
			const backdropOpacity = 0.8;
			const topScreen = window.screen.height - topPositionY;
			const bottomScreen = bottomPositionY;
			const newScreen = window.screen.height - val;
			const opacity = Math.max(
				0,
				Math.min(
					backdropOpacity,
					((newScreen - bottomScreen) / (topScreen - bottomScreen)) * backdropOpacity
				)
			);
			backdrop.style.backgroundColor = `rgba(0, 0, 0, ${opacity - 0.35})`;
		}
	};

	function getPaneTransformY() {
		const translateYRegex = /\.*translateY\((.*)px\)/i;
		const paneEl = document.querySelector('.pane') as HTMLElement;

		if (!paneEl || !paneEl.style.transform) return 0;

		const match = translateYRegex.exec(paneEl.style.transform);
		return match ? parseFloat(match[1]) : 0;
	}

	onMount(async () => {
		const { CupertinoPane } = await import('cupertino-pane');
		pane = new CupertinoPane('.pane-content', {
			parentElement: 'body',
			breaks: {
				top: {
					enabled: true,
					height: window.screen.height - topPositionY
				},
				middle: {
					enabled: false
				},
				bottom: {
					enabled: true,
					height: bottomPositionY,
					bounce: false
				}
			},
			fastSwipeClose: false,
			initialBreak: 'bottom',
			buttonDestroy: false,
			lowerThanBottom: false,
			showDraggable: false,
			events: {
				onDrag: () => changeOpacity(getPaneTransformY()),
				onTransitionStart: (e) => {
					if (e) changeOpacity(e.translateY.new);
				},
				onTransitionEnd: (e) => {
					document.documentElement.style.overflow =
						pane && pane.currentBreak() === 'bottom' ? 'auto' : 'hidden';
				}
			}
		});

		document.documentElement.style.setProperty('--cupertino-pane-border-radius', '6px');
		document.documentElement.style.setProperty(
			'--cupertino-pane-shadow',
			'0 10px 32px rgba(0,0,0,.15)'
		);

		pane.present();

		isLoaded = true;
	});

	onDestroy(() => {
		if (pane) {
			pane.destroy();
		}
	});
</script>

{#if !isLoaded}
	<div
		class="fixed bottom-0 h-[130px] w-full rounded-[6px] bg-white pb-4 pl-4 pr-4 pt-2 shadow-[0_10px_32px_rgba(0,0,0,.15)]"
	>
		<div
			class="absolute left-1/2 top-2 h-1 w-8 -translate-x-1/2 transform rounded-xl bg-gray-300"
		></div>
		<Skeleton class="mt-6 h-6 w-full" />
		<Skeleton class="mt-2 h-12 w-full" />
	</div>
{/if}

{#if showBackdrop}
	<div
		class="backdropContainer pointer-events-none fixed left-0 top-0 z-[2] h-screen w-screen bg-[rgba(0,0,0,0)]"
	></div>
{/if}

<div class="pane-content hidden border border-red-300">
	<div class="pb-4 pl-4 pr-4 pt-2 text-center">
		<div
			class="absolute left-1/2 top-2 h-1 w-8 -translate-x-1/2 transform rounded-xl bg-gray-300"
		></div>
		<slot></slot>
	</div>
</div>
