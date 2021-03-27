module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'hisam-blue': '#090F29',
        'hisam-green': '#55EA9F',
      },
      fontFamily: {
        mono: ["'IBM Plex Mono', monospace"],
        serif: ["'Playfair Display', serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
