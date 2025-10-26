import React from "react";
import { Layout } from "antd";
import Navbar, { type NavBarPagesProps } from "../organisms/Navbar";
import Dashboard from "../pages/Dashboard";
import Icon from "../atoms/Icon";

const UserLayout: React.FC = () => {
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
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#b4b4b4",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <Navbar
          className="flex items-center max-w-7xl min-h-full"
          active={active}
          pages={pages}
          onNavigate={setActive}
        />
      </Header>
      <Content style={{}}>{renderPage()}</Content>
      <Footer
        style={{
          background: "#333333",
          textAlign: "center",
        }}
      >
        <Icon name="klx" />
      </Footer>
    </Layout>
  );
};

export default UserLayout;
