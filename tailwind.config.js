/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				header: '72px',
				remaining: 'calc(100vh - 72px)'
			},
			margin: {
				header: '72px'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['synthwave']
	}
};
