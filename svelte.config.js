/*import adapter from '@sveltejs/adapter-node';*/
import vercel from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		/*ssr: false,*/
		target: '#svelte',
		adapter: vercel()
	}
};

export default config;
