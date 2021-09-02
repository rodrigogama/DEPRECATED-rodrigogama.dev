const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
      fontSize: {
        '7.5xl': '5rem',
      },
      maxWidth: {
        '8xl': '100rem',
      },
      spacing: {
        30: '7.5rem',
      },
      width: {
        '9/10': '90%',
      },
      screens: {
        '3xl': '120rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
