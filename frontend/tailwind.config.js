/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['roboto','sans-serif'],
      oswald: ['oswald','sans-serif'],
      caladea: ['caladea','sans-serif'],
      carme: ['carme','sans-serif'],
      sourceSansPro: ['source-sans-pro','sans-serif'],
      poppins: ['poppins','sans-serif'],
      montserrat: ['montserrat','sans-serif'],
    },
    colors: {
      ...colors,
      primary: {
        ...colors.cyan,
        DEFAULT: '#1aa6c1'
      },
      primary1: {
        ...colors.cyan,
        DEFAULT: '#2899db',
      },
      primary2: {
        ...colors.cyan,
        DEFAULT: '#6cd9d6',
      },
      secondary: {
        ...colors.cyan,
        DEFAULT: '#4f7a9d',
      },
      neutral: {
        ...colors.neutral,
        DEFAULT: '#404040',
      },
      neutral2: {
        ...colors.neutral,
        DEFAULT: '#FAFAFA',
      },
    },
    extend: {
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out',
        fadeOutLeft: 'fadeOutLeft 1s ease-in-out',
        fadeOutRight: 'fadeOutRight 1s ease-in-out',
        fadeOutTop: 'fadeOutTop 1s ease-in-out',
        fadeOutBottom: 'fadeOutBottom 1s ease-in-out',
        tada: 'tada 1s ease-in-out',
        wiggle: 'wiggle 2s linear infinite',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOutLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeOutRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeOutTop: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOutBottom: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.9) rotate(-3deg)' },
          '20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%': { transform: 'scale(1.1) rotate(3deg)' },
          '50%': { transform: 'scale(1.1) rotate(3deg)' },
          '70%': { transform: 'scale(1.1) rotate(3deg)' },
          '90%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%': { transform: 'scale(1.1) rotate(-3deg)' },
          '60%': { transform: 'scale(1.1) rotate(-3deg)' },
          '80%': { transform: 'scale(1.1) rotate(-3deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        },
        wiggle: {
          '0%': { transform: 'rotateZ(0)' },
          '7%': { transform: 'rotateZ(0)' },
          '15%': { transform: 'rotateZ(-10deg)' },
          '20%': { transform: 'rotateZ(8deg)' },
          '25%': { transform: 'rotateZ(-8deg)' },
          '30%': { transform: 'rotateZ(6deg)' },
          '35%': { transform: 'rotateZ(-4deg)' },
          '40%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(0deg)' },
        },
      }),
    },
  },
  plugins: [],
}
