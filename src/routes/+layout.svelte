<script lang="ts">
	import { browser } from '$app/environment';
	import { appearance } from '$/lib/stores/appearance';
	import { settings } from '$lib/stores/settings';
	import '$/styles/theme.scss';
	import '$/styles/global.postcss';
	import { page } from '$app/state';

	function setTheme(appearance_val: string, colour_val: string) {
		if (browser) {
			document.cookie = `appearance=${$appearance}; path=/;`;
			document.cookie = `colour=${$settings.colour}; path=/;`;

			const root = document.querySelector<HTMLHtmlElement>(':root');

			if (root) {
				root.className = ''; // Clear existing themes

				const theme: string = appearance_val + '-theme-' + colour_val;
				root.classList.add(theme);
			}
		}
	}

	$: setTheme($appearance, $settings.colour);
</script>

<svelte:head>
	{#if page.url.pathname !== '/'}
		<!-- prevent sub-pages from being indexed by search engines -->
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		min-height: 100%;
	}
</style>
