import { theme as antdTheme, type ThemeConfig } from "antd";

export const cosmicTheme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  token: {
    colorPrimary: "#8b5cf6", // vibrant cosmic purple
    colorInfo: "#06b6d4", // electric cyan blue
    colorSuccess: "#10b981", // emerald green
    colorWarning: "#f59e0b", // orbit gold
    colorError: "#ef4444", // red
    colorBgBase: "#0f0a19", // deep cosmic void
    colorBgContainer: "#1a1033", // dark nebula purple
    colorTextBase: "#e2e8f0", // starry white
    colorTextSecondary: "#94a3b8", // muted cosmic gray
    colorBorder: "#2d1b69", // purple border
    colorSplit: "#3b2a7a", // nebula divider
  },
};
