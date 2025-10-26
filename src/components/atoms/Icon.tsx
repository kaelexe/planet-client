import React from "react";
import Monitor from "../../assets/images/monitor.svg?react";
import Klx from "../../assets/images/klx_main.svg?react";
import Laptop from "../../assets/images/laptop.svg?react";
import Moon from "../../assets/images/moon.svg?react";
import Sun from "../../assets/images/sun.svg?react";

const icons = {
  klx: Klx,
  dashboard: Monitor,
  laptop: Laptop,
  moon: Moon,
  sun: Sun,
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
