import React from "react";
import { Space, Card, Row, Col, Typography } from "antd";
import planet from "../../assets/images/dash-image.jpg";
import { useGetAllTasksQuery } from "../../store/services/tasksApi";
import Calendar from "../organisms/Calendar";

const Dashboard: React.FC = () => {
  const { data: tasks } = useGetAllTasksQuery();
  const { Text, Title } = Typography;

  // TODO:optimize
  const inCompletedTasks = tasks?.filter((task) => !task.isComplete).length;

  return (
    <Space size={"middle"} direction="vertical" className="mb-4">
      {/* mini hero */}
      <div className="relative w-full h-[200px] overflow-hidden rounded">
        <div className="relative z-10 m-10 space-y-2">
          <h1 className="text-white text-2xl md:text-4xl">
            Welcome to your Dashboard
          </h1>
          <Text className="text-white! font-semibold">
            You have {inCompletedTasks} pending tasks.
          </Text>
        </div>
        <div className="heading-image-container">
          <img
            src={planet}
            alt="Planet"
            className="w-full h-auto object-cover transform -translate-y-50 opacity-80"
          />
        </div>
      </div>

      {/* overview */}
      <Row gutter={[16, 16]}>
        {/* Calendar */}
        <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
          <Card>
            <Calendar />
          </Card>
        </Col>

        {/* Overview section */}
        <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
          <Space direction="vertical" className="w-full" size="middle">
            <Row className="Overview" gutter={16}>
              <Col span={12}>
                <Card>
                  <Text strong>Total Tasks</Text>
                  <br />
                  <Title level={4}>{tasks?.length || 0}</Title>
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Text strong>Pending Tasks</Text>
                  <br />
                  <Title level={4}>{inCompletedTasks || 0}</Title>
                </Card>
              </Col>
            </Row>
            <Card title="Recent Activities">
              <Text>No recent activities.</Text>
            </Card>
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default Dashboard;
