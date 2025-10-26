import React from "react";
import NavItem from "../molecules/NavItem";
import ThemeToggle from "../atoms/ThemeToggle";
import Icon from "../atoms/Icon";

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
  <nav className={`${className} mx-auto px-4 sm:px-6 lg:px-8`}>
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

    <ThemeToggle />
  </nav>
);

export default Navbar;
