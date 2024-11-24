/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor, cshtml, html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(240, 73%, 65%)",
        "soft-red": "hsl(14, 88%, 65%)",
        "soft-violet": "hsl(273, 75%, 66%)",

        "very-dark-blue": "hsl(238, 29%, 16%)",
        "very-dark-grayish-blue": "hsl(237, 12%, 33%)",
        "dark-grayish-blue": "hsl(240, 6%, 50%)",

        "light-grayish-blue": "hsl(240, 5%, 91%)",

        attr: {
          red: "hsl(0, 70%, 55%)",
          "dark-gray": "hsl(0, 0%, 9%)",
        },
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      spacing: {
        18: "4.5rem",
      },
      keyframes: {
        "figure-bounce": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3em)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "figure-bounce": "figure-bounce 10s ease-in-out infinite",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
