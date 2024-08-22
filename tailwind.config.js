/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        customGrey: "#565656",
        customOrange: "#D54700",
        customWhite: "#e6e6e6",
      },

      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'arial': ['arial', 'sans-serif']
      },
    },
    plugins: [],
  }
}
