import React from "react";
import { Button, Card, Typography } from "antd";
import { useTheme } from "../../store/hooks/useTheme";

const { Title, Text } = Typography;

const Dashboard: React.FC = () => {
  const { theme, setThemeMode } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setThemeMode("dark");
    else if (theme === "dark") setThemeMode("system");
    else setThemeMode("light");
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background-light dark:bg-background-dark flex flex-col items-center justify-center gap-6">
      {/* Ant Design Card */}
      <Card
        className="w-[400px] shadow-lg bg-white/70 dark:bg-[#1e293b]/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-colors duration-300"
        title={<Title level={3}>Dashboard</Title>}
      >
        <Text className="block mb-4 text-gray-700 dark:text-gray-300">
          Current Theme:{" "}
          <span className="font-semibold text-primary dark:text-secondary">
            {theme.toUpperCase()}
          </span>
        </Text>

        <Button type="primary" onClick={toggleTheme} className="w-full">
          Toggle Theme
        </Button>
      </Card>

      {/* Tailwind-only demo box */}
      <div className="p-4 rounded-lg shadow-md bg-primary text-textSecondary dark:textPrimary dark:deepSpace transition-colors">
        <p>Tailwind Primary Box</p>
      </div>
    </div>
  );
};

export default Dashboard;
