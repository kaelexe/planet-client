import { theme as antdTheme } from "antd";

export const getAntdTheme = (isDark: boolean) => ({
  algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
  token: {
    colorPrimary: "#5b49f0", // Cosmic Purple
    colorSuccess: "#10b981", // Emerald Green
    colorWarning: "#f59e0b", // Orbit Gold
    colorInfo: "#63b3ed", // Celestial Blue
    colorBgBase: isDark ? "#1a2332" : "#ffffff", // Background
    colorTextBase: isDark ? "#f8fafc" : "#0f172a", // Text
  },
});
