module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'primary-dark': '#141414',
				'primary-white': '#dedede',
				'sec-white': '#525252',
				'primary-gray': '#515151',
				'sec-gray': '#a4a29d',
				'p-pink': '#e80fef',
				'p-blue': '#061ef4',
				's-blue': '#07f2f2',
				'p-green': '#00df32',
				'p-yellow': '#fdfd00',
				'p-orange': '#ff4d07',
				'p-red': '#ff0126',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['checked'],
			borderColor: ['checked'],
		},
	},
	plugins: [],
}
