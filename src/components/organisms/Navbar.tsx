import React from "react";
import NavItem from "../molecules/NavItem";

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
  </nav>
);

export default Navbar;
