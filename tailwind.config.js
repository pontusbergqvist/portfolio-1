module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#343434',
        secondary: '#fff'
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
        verdana: ['Verdana', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
