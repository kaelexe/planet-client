/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      colors: {
        base: {
          light: "#1e293b",
          dark: "#f8fafc",
        },
        accent: {
          light: "#38bdf8",
          dark: "#f8fafc",
        },
        background: {
          light: "#f8fafc",
          dark: "#1e293b",
        },
      },
    },
  };