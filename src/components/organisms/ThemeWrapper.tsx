import React from "react";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { type RootState } from "../../store/store";
import { getAntdTheme } from "../../utils/getAntdTheme";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.settings.theme);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "system" ? prefersDark : theme === "dark";

  // Tailwind dark class
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ConfigProvider theme={getAntdTheme(isDark)}>{children}</ConfigProvider>
  );
};
