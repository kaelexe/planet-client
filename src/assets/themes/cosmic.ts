import { theme as antdTheme, type ThemeConfig } from "antd";

export const cosmicTheme: ThemeConfig = {
  algorithm: antdTheme.defaultAlgorithm,
  token: {
    colorPrimary: "#5b49f0", // cosmic purple
    colorInfo: "#63b3ed", // celestial blue
    colorSuccess: "#10b981", // emerald green
    colorWarning: "#f59e0b", // orbit gold
    colorError: "#ef4444", // red
    colorBgBase: "#1a2332", // deep space blue
    colorBgContainer: "#2d3748", // surface dark
    colorTextBase: "#f8fafc", // white text
    colorTextSecondary: "#cbd5e1", // subtle text
    colorBorder: "#374151", // dark gray border
    colorSplit: "#475569", // divider lines
  },
};
