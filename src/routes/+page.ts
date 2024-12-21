import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const res = await fetch('https://api.github.com/repos/jn3008/glyph-glyph');
	const { stargazers_count } = await res.json();
	return { stargazers: stargazers_count };
};
