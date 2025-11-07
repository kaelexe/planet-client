import React from "react";
import { Card, Button, Typography, Space } from "antd";
import ThemeToggle from "../atoms/ThemeToggle";

const { Title, Paragraph } = Typography;

const TestTheming: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-6 
                    bg-(--ant-color-bg-base) text-(--ant-color-text-base) p-8"
    >
      <Title>Dashboard</Title>

      <Paragraph className="text-center max-w-lg">
        This dashboard lets you test theme changes across light, dark, and
        seasonal modes. The colors below adapt automatically to your theme.
      </Paragraph>

      <Space direction="vertical" size="large" className="w-full max-w-md">
        <Card title="Primary Actions">
          <Space>
            <Button type="primary">Primary</Button>
            <Button type="default">Default</Button>
            <Button type="dashed">Dashed</Button>
          </Space>
        </Card>

        <Card title="Status Colors">
          <Space wrap>
            <Button type="primary">Primary</Button>
            <Button type="default" danger>
              Danger
            </Button>
            <Button type="dashed">Info</Button>
            <Button style={{ backgroundColor: "#10b981", color: "white" }}>
              Success
            </Button>
          </Space>
        </Card>

        <Card title="Theme Selector">
          <ThemeToggle />
        </Card>
      </Space>
    </div>
  );
};

export default TestTheming;
