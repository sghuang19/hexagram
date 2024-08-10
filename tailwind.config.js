/** @type {import("tailwindcss").Config} */
export default {
  content: ["./client/index.html", "./client/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif"],
      serif: ["Zhi Mang Xing", "ui-serif"],
      mono: ["Ubuntu Mono", "ui-monospace"],
    },
    extend: {
      screens: {
        wide: { raw: "(min-aspect-ratio: 3/2)" },
      },
    },
  },
  plugins: [],
};
