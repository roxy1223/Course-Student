
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
    extend: {
      colors: {
        "raw-sienna": "#CB8461",
        "slate-green": "#215D4F",
        "light-grey": "#969696",
        "edfling-green": "#45776B"
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

