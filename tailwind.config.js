/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'ppt': ["Outfit", "sans-serif"],
        'ppt2':["Bodoni Moda", "serif"]
      }
    },
  },
  plugins: [],
}