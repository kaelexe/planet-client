import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type ThemeMode, setTheme } from "../slices/settingsSlice";
import type { AppDispatch, RootState } from "../store";

export const useTheme = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.settings.theme);

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = theme === "system" ? prefersDark : theme === "dark";
    root.classList.toggle("dark", isDark);
  }, [theme]);

  const setThemeMode = (newTheme: ThemeMode) => {
    dispatch(setTheme(newTheme));
  };

  return { theme, setThemeMode };
};
