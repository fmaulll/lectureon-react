/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'simple-wallpaper': "url('/src/assets/SimpleWallpaper.webp')",
      }
    },
  },
  plugins: [],
}