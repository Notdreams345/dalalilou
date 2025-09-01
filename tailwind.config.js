/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ffff",
        dark: "#0a0a0a"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
