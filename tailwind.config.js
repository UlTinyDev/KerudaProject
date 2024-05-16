/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				header: '64px',
				remaining: 'calc(100vh - 64px)'
			},
			margin: {
				header: '64px'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['synthwave']
	}
};
