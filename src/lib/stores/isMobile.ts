import { writable } from 'svelte/store';

export const isMobile = writable(false);

if (typeof window !== 'undefined') {
	const smBreakpoint = 640;

	const checkScreenSize = () => isMobile.set(window.innerWidth < smBreakpoint);
	checkScreenSize();

	window.addEventListener('resize', checkScreenSize);

	window.addEventListener('beforeunload', () => {
		window.removeEventListener('resize', checkScreenSize);
	});
}
