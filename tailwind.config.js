/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "surface-bg": "#1a1a1a",
        "surface-cyan": "#00bcd4",
        "surface-cyan-light": "#caffff",
        "surface-red": "#ff4444",
      },
      boxShadow: {
        "cyan-glow":
          "0 0 10px rgba(0, 188, 212, 0.5), 0 0 20px rgba(0, 188, 212, 0.3)",
        "cyan-glow-intense":
          "0 0 15px rgba(0, 188, 212, 0.8), 0 0 30px rgba(0, 188, 212, 0.5)",
      },
    },
  },
  plugins: [],
};
