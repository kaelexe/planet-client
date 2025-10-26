import { type ThemeConfig } from "antd";
import { darkTheme, cosmicTheme, lightTheme } from "../assets/themes";

export type ThemeMode = "system" | "light" | "dark" | "cosmic";

export const getAntdTheme = (themeMode: ThemeMode): ThemeConfig => {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const effectiveMode =
    themeMode === "system" ? (prefersDark ? "dark" : "light") : themeMode;

  switch (effectiveMode) {
    case "dark":
      return darkTheme;
    case "cosmic":
      return cosmicTheme;
    case "light":
    default:
      return lightTheme;
  }
};
