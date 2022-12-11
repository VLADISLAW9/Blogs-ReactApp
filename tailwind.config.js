/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern':
					'url(https://i.pinimg.com/originals/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg)',
			},
		},
	},
	plugins: [],
}
