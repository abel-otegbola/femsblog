/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Lato", "sans-serif"],
        heading: ["Josefin Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
