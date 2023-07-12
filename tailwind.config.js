/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'simple-wallpaper': "url('/src/assets/SimpleWallpaper.webp')",
      },
      colors: {
        darkTransparent: "rgba(0, 0, 0, 0.8)",
        darkTransparentLight: "rgba(0, 0, 0, 0.2)",
      }
    },
  },
  plugins: [],
}