import React from "react";
import Monitor from "../../assets/images/monitor.svg?react";

const icons = {
  dashboard: Monitor,
};

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "black",
  className = undefined,
}) => {
  const SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> = icons[name];
  return (
    <SvgIcon className={className} width={size} height={size} fill={color} />
  );
};

export default Icon;
