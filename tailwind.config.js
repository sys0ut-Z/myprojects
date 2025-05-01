/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#FF0A47",
        secondary : '#FF3131'
      }
    },
  },
  plugins: [],
}
