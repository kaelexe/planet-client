import React from "react";
import { Select } from "antd";
import { useTheme } from "../../store/hooks/useTheme";
import type { ThemeMode } from "../../store/slices/settingsSlice";

const ThemeToggle: React.FC = () => {
  const { theme, setThemeMode } = useTheme();

  const handleChange = (value: ThemeMode) => {
    setThemeMode(value);
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <Select
        value={theme}
        onChange={handleChange}
        style={{ width: 200 }}
        options={[
          { label: "System Default", value: "system" },
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
          { label: "Cosmic", value: "cosmic" },
        ]}
      />
    </div>
  );
};

export default ThemeToggle;
