/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#ffffff",
  background: "#000000",
  lightbg: "#111111",
  card: "#000000",
  btnbg: "#222222",
  yellow: "#ffffff",
  purple: "#ffffff",
  pink: "#ffffff",
  lighttext: "#ffffff",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
