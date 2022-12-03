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
        'mac-red': '#EC6B5E',
        'mac-yellow': '#F3BF4F',
        'mac-green': '#61C554',
      },
    },
  },
  plugins: [],
}
