import React from "react";
import { Layout, theme } from "antd";
import Navbar, { type NavBarPagesProps } from "../organisms/Navbar";
import Dashboard from "../pages/Dashboard";
import Icon from "../atoms/Icon";
import { useTasks } from "../../store/hooks/useTasks";

const UserLayout: React.FC = () => {
  const { token } = theme.useToken();
  const { fetchAllTasks } = useTasks();
  const { Content, Header, Footer } = Layout;
  const [active, setActive] = React.useState("Dashboard");

  const pages: NavBarPagesProps[] = [
    { pageLabel: "Dashboard", icon: <Icon name="dashboard" size={20} /> },
  ];

  const renderPage = () => {
    switch (active) {
      default:
        return <Dashboard />;
    }
  };

  React.useEffect(() => {
    // TODO: renders 2 times on mount
    fetchAllTasks();
  }, []);

  return (
    <Layout className="h-screen">
      <Header
        className=" position-sticky top-0 z-10"
        style={{
          background: token.colorBgBase,
          color: token.colorTextBase,
        }}
      >
        <Navbar
          className="max-w-7xl min-h-full"
          active={active}
          pages={pages}
          onNavigate={setActive}
        />
      </Header>
      <Content className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {renderPage()}
      </Content>
      <Footer className="text-center">
        <Icon name="klx" />
      </Footer>
    </Layout>
  );
};

export default UserLayout;
