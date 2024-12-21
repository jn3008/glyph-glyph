import type { Handle } from '@sveltejs/kit';

// The purpose of this code is to avoid flash of default theme (FODT), applying the theme before
// rendering when the page so that the theme doesn't flash briefly on page refreshes

// intercepts every incoming request in a SvelteKit app, retrieves the user's theme preferences
// (appearance and colour) from cookies, and dynamically injects a theme-specific class
export const handle: Handle = async ({ event, resolve }) => {
	const appearance = event.cookies.get('appearance') || 'light';
	const colour = event.cookies.get('colour') || 'blue';

	// generate the css theme class name (e.g., 'light-theme-blue')
	const theme = `${appearance}-theme-${colour}`;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('<html lang="en">', `<html lang="en" class="${theme}">`)
	});

	return response;
};
