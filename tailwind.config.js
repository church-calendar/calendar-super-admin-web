/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        golos: ["var(--font-golos-text)"], // 👈 Golos from next/font
      },
    },
  },
  plugins: [],
};
