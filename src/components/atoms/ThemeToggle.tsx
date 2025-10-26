import React from "react";
import { useTheme } from "../../store/hooks/useTheme";
import type {} from "../../store/slices/settingsSlice";

const ThemeToggle: React.FC = () => {
  const { theme, setThemeMode } = useTheme();

  const nextTheme =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

  const label =
    theme === "light" ? "🌞 Light" : theme === "dark" ? "🌙 Dark" : "💻 System";

  return <button onClick={() => setThemeMode(nextTheme)}>{label}</button>;
};

export default ThemeToggle;
