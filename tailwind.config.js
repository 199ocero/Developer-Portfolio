/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        iridium: '#3C3C3C',
        dune: '#333333',
        'baltic-sea': '#252526',
        'dark-gray': '#1E1E1E',
      },
    },
  },
  plugins: [],
}
