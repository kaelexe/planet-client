/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Core Palette
        deepSpace: "#1a2332", // dark background
        cosmicPurple: "#5b49f0", // primary accent
        celestialBlue: "#63b3ed", // secondary accent
        emeraldGreen: "#10b981", // success/completion
        orbitGold: "#f59e0b", // attention/warning
        neptuneGray: "#374151", // medium gray (text)
        white: "#ffffff", // base light color

        // UI Surfaces
        surfaceDark: "#2d3748",
        surfaceLight: "#f8fafc",

        // Text Colors
        textPrimary: "#0f172a",
        textSecondary: "#475569",
        textMuted: "#94a3b8",
      },
      backgroundImage: {
        "cosmic-journey":
          "linear-gradient(to right, #5b49f0, #7c3aed, #8b5cf6)",
        "productivity-flow":
          "linear-gradient(to right, #10b981, #14b8a6, #22d3ee)",
        "deep-space": "linear-gradient(to bottom, #1a2332, #0f172a)",
      },
    },
  },
  plugins: [],
};