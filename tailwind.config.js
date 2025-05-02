/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary : "#FF0A47",
        secondary : '#FF3131'
      },
    },
    // screens : {
    //   'between-mobile-tablet' : '450px'
    // },
    // spacing : {
    //   'gt-md' : '2rem',
    //   'between-mobile-tablet' : '450px'
    // }
  },
  plugins: [],
}
