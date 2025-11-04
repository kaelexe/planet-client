import React from "react";
import { Button, Dropdown, type MenuProps, theme, Typography } from "antd";
import Icon from "../atoms/Icon";
import Avatar from "../atoms/Avatar";

export interface SettingProps {
  items: MenuProps["items"];
}

const Settings: React.FC<SettingProps> = ({ items }) => {
  const { token } = theme.useToken();
  const [open, setOpen] = React.useState(false);
  const { Text } = Typography;

  return (
    <Dropdown
      open={open}
      onOpenChange={(flag) => setOpen(flag)}
      menu={{ items }}
      placement="bottomRight"
      trigger={["click"]}
    >
      <Button
        type="text"
        style={{
          marginLeft: 12,
          color: "inherit",
          backgroundColor: "transparent",
        }}
      >
        <Text>Settings</Text>
        <Avatar />
        <Icon
          name="arrowDown"
          size={20}
          color={token.colorTextBase}
          animate={`${open ? "rotate-180" : "rotate-0"}`}
        />
      </Button>
    </Dropdown>
  );
};

export default Settings;
