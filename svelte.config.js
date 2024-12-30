// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

// const dev = process.argv.includes('dev'); // Checks if running `npm run dev`

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		// adapter: adapter(),

    adapter: adapter({
      fallback: 'index.html', // Use a single fallback file for dynamic routes
    }),

    serviceWorker: {
      register: true,
      files: (filepath) => !filepath.endsWith('.map')
			// Source maps are not necessary for the functioning of the application, 
			// and they can be quite large. Including them in your service worker's
			// cache would be unnecessary and waste space.
    },

		alias: {
			$: "src"
		},
		
		paths: {
      base: '',
    },

		prerender: {
			entries: [
				"*",        // Automatically include all static routes
				"/",        // Root route
				"/play",    // Play route
				"/setup"    // Setup route
			]
		}
	}
};

export default config;
