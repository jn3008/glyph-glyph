import { derived } from 'svelte/store';
import type { Readable } from 'svelte/store';
import { settings } from './settings';
import { browser } from '$app/environment';

function createOSThemeStore(): Readable<string> {
	type ListenerT = (theme: string) => void;
	const listeners = new Set<ListenerT>();
	let color_scheme = 'light';

	function onChangeMediaQuery(event: MediaQueryListEvent): void {
		color_scheme = event.matches ? 'dark' : 'light';
		listeners.forEach((listener) => {
			listener(color_scheme);
		});
	}

	// Only call browser APIs if browser
	if (browser) {
		const mediaQuery = matchMedia('(prefers-color-scheme: dark)');
		color_scheme = mediaQuery.matches ? 'dark' : 'light';
		mediaQuery.addEventListener('change', onChangeMediaQuery);
	}

	return {
		subscribe(listener: ListenerT) {
			listeners.add(listener);
			listener(color_scheme); // send value to new listener
			return function unsubscribe() {
				listeners.delete(listener);
			};
		}
	};
}

export const os_theme = createOSThemeStore();

export const appearance = derived([os_theme, settings], ([$os_theme, $settings]) => {
	return $settings.appearance === 'auto' ? $os_theme : $settings.appearance;
});
