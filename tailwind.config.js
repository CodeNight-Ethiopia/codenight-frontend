/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		darkMode: "class",
		extend: {
			colors: {
				"brand-blue": "#17275c",
				"brand-black": "#02040F",
			},
		},
	},
	plugins: [],
};
