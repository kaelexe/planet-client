import React from "react";
import {
  Avatar as AntdAvatar,
  type AvatarProps as AntdAvatarProps,
} from "antd";
import Icon from "./Icon";

export interface AvatarProps {
  size?: AntdAvatarProps["size"];
  src?: string | React.ReactNode;
  alt?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  size = 40,
  src = <Icon name="cappucinoAssassino" />,
  alt = "User Avatar",
  className = undefined,
}) => {
  return <AntdAvatar size={size} src={src} alt={alt} className={className} />;
};

export default Avatar;
