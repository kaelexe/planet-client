import React from "react";
import { Card, Row, Col, Typography } from "antd";
import planet from "../../assets/images/dash-image.jpg";
import { useTasks } from "../../store/hooks/useTasks";

const Dashboard: React.FC = () => {
  const { tasks } = useTasks();
  const { Text } = Typography;

  // TODO:optimize
  const inCompletedTasks = tasks.filter((task) => !task.isComplete).length;

  return (
    <div className="relative w-full h-[200px] overflow-hidden rounded">
      <div className="relative z-10 m-10 space-y-2">
        <h1 className="text-white text-2xl md:text-4xl">
          Welcome to your Dashboard
        </h1>
        <Text className="text-white! font-semibold">
          You have {inCompletedTasks} pending tasks.
        </Text>
      </div>
      <div className="image-container">
        <img
          src={planet}
          alt="Planet"
          className="w-full h-auto object-cover transform -translate-y-50 opacity-80"
        />
      </div>
    </div>
  );
};

export default Dashboard;
