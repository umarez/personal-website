const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile-md' : '375px',
      'mobile-l' : '425px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
      boxShadow: {
        shad: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        button: '#333449',
        buttonHover : '#292B50'
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
