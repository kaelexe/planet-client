import React from "react";
import NavItem from "../molecules/NavItem";
import Icon from "../atoms/Icon";
import Settings from "../molecules/Settings";
import ThemeToggle from "../atoms/ThemeToggle";

export interface NavBarPagesProps {
  pageLabel: string;
  icon?: React.ReactNode;
}

interface NavbarProps {
  active: string;
  pages: NavBarPagesProps[];
  onNavigate: (page: string) => void;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  active,
  pages,
  onNavigate,
  className,
}) => (
  <nav
    className={`flex items-center justify-between ${className} mx-auto px-4 sm:px-6 lg:px-8`}
  >
    <section className="flex items-center space-x-4">
      <Icon name="logoMedium" size={40} className="mr-4" />
      {pages.map((page) => {
        return (
          <NavItem
            key={page.pageLabel}
            label={page.pageLabel}
            isActive={active === page.pageLabel}
            icon={page.icon}
            onClick={() => onNavigate(page.pageLabel)}
          />
        );
      })}
    </section>
    <Settings
      items={[
        {
          key: 1,
          label: <ThemeToggle />,
        },
        {
          type: "divider",
        },
        {
          key: 2,
          label: "Logout",
        },
      ]}
    />
  </nav>
);

export default Navbar;
