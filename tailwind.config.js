/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"brand-blue": "#17275c",
				"brand-black": "#02040F",
			},
		},
	},
	plugins: [
      require('@tailwindcss/aspect-ratio'),
	],
};
