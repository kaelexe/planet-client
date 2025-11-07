import React from "react";
import { Space, Card, Row, Col, Typography } from "antd";
import planet from "../../assets/images/dash-image.jpg";
import { useGetTaskOverviewApiQuery } from "../../store/services/task.overview";
import Calendar from "../organisms/Calendar";
import DateTimeDisplay from "../atoms/Clock";
import { currentDateInfo as currentDate } from "../../utils/date-time.util";

const Dashboard: React.FC = () => {
  const { data: taskOverview } = useGetTaskOverviewApiQuery({
    calendar_month: currentDate().currentMonthNumber,
  });
  const { Text, Title } = Typography;

  return (
    <Space size={"middle"} direction="vertical" className="mb-4">
      {/* mini hero */}
      <div className="relative w-full h-[200px] overflow-hidden rounded">
        <div className="relative z-10 m-10 space-y-2">
          <h1 className="text-white text-2xl md:text-4xl">
            Welcome to your Dashboard
          </h1>
          <Text className="text-white! font-semibold">
            You have {taskOverview?.pendingTasksCount || 0} pending tasks.
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
          <Card className=" text-right">
            <DateTimeDisplay />
            <Calendar
              deadlines={taskOverview?.tasks || []}
              parentClassName="task-overview"
            />
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
                  <Title level={4}>{taskOverview?.totalTasks || 0}</Title>
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Text strong>Pending Tasks</Text>
                  <br />
                  <Title level={4}>
                    {taskOverview?.pendingTasksCount || 0}
                  </Title>
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
