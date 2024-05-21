// const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
			  'blue': '#0000FF',
			},
		  },
		fontSize: {
			'p': '16px',
			'h1': '30px',
			'h2': '20px',
		  }
	},
	plugins: []
};
