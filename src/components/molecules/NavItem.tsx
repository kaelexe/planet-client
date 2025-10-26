import React from "react";
import { Button, theme } from "antd";
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
  const { token } = theme.useToken();
  const [hovered, setHovered] = React.useState(false);

  const backgroundColor = isActive
    ? token.colorPrimary + "26" // oppacity
    : hovered
    ? token.colorFillSecondary
    : "transparent";

  const textColor = isActive
    ? token.colorPrimary
    : hovered
    ? token.colorTextBase
    : token.colorTextSecondary;

  const buttonVariant: BaseButtonProps["variant"] = isActive
    ? "filled"
    : "text";

  return (
    <Button
      type="text"
      variant={buttonVariant}
      style={{
        marginRight: 12,
        color: textColor,
        backgroundColor,
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
