import React from "react";
import { Layout, theme } from "antd";
import Navbar, { type NavBarPagesProps } from "../organisms/Navbar";
import Dashboard from "../pages/Dashboard";
import Icon from "../atoms/Icon";

const UserLayout: React.FC = () => {
  const { token } = theme.useToken();
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
      <Content style={{}}>{renderPage()}</Content>
      <Footer className="text-center">
        <Icon name="klx" />
      </Footer>
    </Layout>
  );
};

export default UserLayout;
