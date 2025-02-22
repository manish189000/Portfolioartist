/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        lato2: ["Pacifico", "cursive"],
        lato3: ["Aguafina Script", "cursive"],
        playwrite: ['"Playwrite MX"', "cursive"],
        Arial: ["Arimo", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
