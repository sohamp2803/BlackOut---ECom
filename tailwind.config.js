/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'body-lg': ['Hanken Grotesk', 'sans-serif'],
        'body-md': ['Hanken Grotesk', 'sans-serif'],
        'headline-lg': ['Anton', 'sans-serif'],
        'display-lg': ['Anton', 'sans-serif'],
        'label-caps': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}