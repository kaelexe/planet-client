import { theme as antdTheme, type ThemeConfig } from "antd";

export const lightTheme: ThemeConfig = {
  algorithm: antdTheme.defaultAlgorithm,
  token: {
    colorPrimary: "#5b49f0", // cosmic purple
    colorInfo: "#63b3ed", // celestial blue
    colorSuccess: "#10b981", // emerald green
    colorWarning: "#f59e0b", // orbit gold
    colorError: "#ef4444", // standard error red
    colorBgBase: "#ffffff", // white background
    colorBgContainer: "#f8fafc", // light gray surface
    colorTextBase: "#0f172a", // dark navy
    colorTextSecondary: "#475569", // slate gray
    colorBorder: "#e2e8f0", // border gray
    colorSplit: "#cbd5e1", // divider gray
  },
};
