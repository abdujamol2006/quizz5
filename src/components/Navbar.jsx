//icons
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
//antd
import { Flex, Menu, Typography, Space } from "antd";
//rrd
import { Link } from "react-router-dom";
//Typography
const { Title } = Typography;
const items = [
  {
    key: "13",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "14",
    label: <Link to="/about">About</Link>,
  },
  ,
];
const Navbar = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Flex vertical>
      <div>
        <Typography>
          <Title level={2}>
            <Space align="center">MyStore</Space>
          </Title>
        </Typography>
      </div>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </Flex>
  );
};
export default Navbar;
