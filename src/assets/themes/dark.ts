import { theme as antdTheme, type ThemeConfig } from "antd";

export const darkTheme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  token: {
    colorPrimary: "#5b49f0", // cosmic purple
    colorInfo: "#63b3ed", // celestial blue
    colorSuccess: "#10b981", // emerald green
    colorWarning: "#f59e0b", // orbit gold
    colorError: "#ef4444", // red
    colorBgBase: "#1a2332", // deep space
    colorBgContainer: "#2d3748", // dark gray surface
    colorTextBase: "#f8fafc", // light text
    colorTextSecondary: "#cbd5e1", // muted light text
    colorBorder: "#374151", // gray border
    colorSplit: "#475569", // divider lines
  },
};
