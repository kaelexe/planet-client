import React from "react";
import { Dropdown, Select } from "antd";
import { useTheme } from "../../store/hooks/useTheme";
import type { ThemeMode } from "../../store/slices/settingsSlice";

const ThemeToggle: React.FC = () => {
  const { theme, setThemeMode } = useTheme();

  const handleChange = (value: ThemeMode) => {
    setThemeMode(value);
  };

  return (
    <div className="flex flex-col">
      <Dropdown
        menu={{
          items: [
            {
              key: "system",
              label: "System Default",
              onClick: () => handleChange("system"),
            },
            {
              key: "light",
              label: "Light",
              onClick: () => handleChange("light"),
            },
            {
              key: "dark",
              label: "Dark",
              onClick: () => handleChange("dark"),
            },
            {
              key: "cosmic",
              label: "Cosmic",
              onClick: () => handleChange("cosmic"),
            },
          ],
        }}
        trigger={["hover"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </a>
      </Dropdown>
    </div>
  );
};

export default ThemeToggle;
