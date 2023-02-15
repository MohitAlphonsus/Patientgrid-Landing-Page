/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js}', './index.html'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				'color-header': '#E8E8E8',
				'color-background': '#F8F8F8',
				'color-primary': '#2A0896',
				'color-secondary': '#87CEFA',
				'color-tertiary': '#4482C2',
				'color-neutral-1': '#DDE9FF',
				'color-neutral-2': '#D9DEEF',
			},
		},
	},
	plugins: [],
};
