/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wpi-red": "#C70F34",
        "wpi-red-faded": "#e4a3b2",
        "wpi-gray": "#B2B7BB",
        "wpi-gray-faded": "#dddfe0",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};
