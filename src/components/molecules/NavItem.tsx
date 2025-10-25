import React from "react";
import { Button } from "antd";
import type { BaseButtonProps } from "antd/es/button/button";

interface NavItemProps {
  label: string;
  isActive: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  isActive,
  icon,
  onClick = () => {},
}) => {
  const [hovered, setHovered] = React.useState(false);

  const textColor = isActive
    ? "#0040ca" // active
    : hovered
    ? "#555" // on hover
    : "#888"; // default

  const buttonVariant: BaseButtonProps["variant"] = isActive
    ? "filled"
    : "text";

  return (
    <Button
      type="text"
      variant={buttonVariant}
      style={{
        marginRight: 12,
        backgroundColor: isActive ? "#188fff78" : undefined,
        color: textColor,
      }}
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
      onClick={onClick}
    >
      {icon}
      {label}
    </Button>
  );
};

export default NavItem;
