/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			Montserrat: ["Montserrat", "sans-serif"],
			Oswald: ["Oswald", "sans-serif"],
			Poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
