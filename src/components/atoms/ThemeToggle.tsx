import React from "react";
import { useTheme } from "../../store/hooks/useTheme";

const ThemeToggle: React.FC = () => {
  const { theme, setThemeMode } = useTheme();

  const nextTheme =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

  const label =
    theme === "light" ? "🌞 Light" : theme === "dark" ? "🌙 Dark" : "💻 System";

  return <button onClick={() => setThemeMode(nextTheme)}>{label}</button>;
};

export default ThemeToggle;
