/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#0091DD',
      secondary: '#90CF3F',
      secondaryDark: '#0061A4',
      input: '#9E9E9E',
      error: '#FF1F1F',
      backgroundDark: '#F4F4F4',
      white: '#ffffff'
    },
    fontFamily: {
      Fira: ['Fira Sans', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
      Titillium: ['Titillium Web', 'sans-serif']
    },
    fontSize: {
      xs: '0.6rem',
      sm: '0.9rem',
      base: '1rem',
      'xl': '1.4rem',
      '2xl': '1.65rem',
      '3xl': '2.3rem',
    },
    extend: {},
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],

}
