// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to your folder
  ],
  safelist: [
    "translate-x-0",
    "-translate-x-full"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
