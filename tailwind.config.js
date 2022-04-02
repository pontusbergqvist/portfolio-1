const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        secondary: '#fff',
        link: '#0000EE',
        darkBg: '#1e293b',
        darkText: '#fff'
      },
      fontSize: {
        heading: '80px',
        headingSecondary: '40px',
        headingTertiary: '30px',
        body: '20px',
      },
      fontFamily: {
        dankMono: ['Dank Mono', 'sans-serif'],
        plexSerif: ['IBM Plex Serif', 'sans-serif'],
        verdana: ['Verdana', 'Tahoma', 'sans-serif'],
      },
    },
    screens: {
      grande: '1430px',
      larger: '1230px',
      large: '960px',
      medium: '700px',
      smol: '376px',
      dontUseGalaxyFeold: '281px',
      landscapeMax: { 'raw': '(max-height: 730px)' },
      ...screens,
    },
  },
  plugins: [],
}
