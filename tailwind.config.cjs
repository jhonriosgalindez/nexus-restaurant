/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'marcellus': ['Marcellus']
			},
			keyframes: {
				show: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			}
		},
	},
	plugins: [],
}
