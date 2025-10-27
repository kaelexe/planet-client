import React from "react";
import Monitor from "../../assets/images/monitor.svg?react";
import CappucinoAssassino from "../../assets/images/cappucino-assassino.svg?react";
import LogoMedium from "../../assets/images/planet_logo_m1.svg?react";
import Klx from "../../assets/images/klx_main.svg?react";
import Laptop from "../../assets/images/laptop.svg?react";
import Moon from "../../assets/images/moon.svg?react";
import Sun from "../../assets/images/sun.svg?react";
import ArrowDown from "../../assets/images/down-arrow-head.svg?react";

const icons = {
  klx: Klx,
  dashboard: Monitor,
  laptop: Laptop,
  moon: Moon,
  sun: Sun,
  logoMedium: LogoMedium,
  arrowDown: ArrowDown,
  cappucinoAssassino: CappucinoAssassino,
};

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
  className?: string;
  animate?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "black",
  className = undefined,
  animate = undefined,
}) => {
  const SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> = icons[name];
  return (
    <SvgIcon
      className={`${className} ${
        animate
          ? animate + " transition-transform duration-300 ease-in-out"
          : ""
      }`}
      width={size}
      height={size}
      fill={color}
      color={color}
    />
  );
};

export default Icon;
