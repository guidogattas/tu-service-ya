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
        'arial': ['arial', 'sans-serif'],
      },
      textShadow: {
        'default': '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
        },
      });
    },
  ],
}
