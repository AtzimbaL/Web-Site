/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      'box': '287px',
    },
    extend: {
      screens: {
        'sm': '320px',
        'nor': '420px',
        'md': '720px',
        'lg': '1024px',
        'xl': '1280px',

    },
    },
  },
  plugins: [],
}