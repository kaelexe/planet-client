import React from "react";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { type RootState } from "../../store/store";
import { getAntdTheme } from "../../utils/getAntdTheme";

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useSelector((state: RootState) => state.settings.theme);

  const themeConfig = getAntdTheme(theme);

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};
