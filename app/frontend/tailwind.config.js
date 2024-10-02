/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wpi-red':'#C70F34',
        'wpi-gray':'#B2B7BB',
      },
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [],
}