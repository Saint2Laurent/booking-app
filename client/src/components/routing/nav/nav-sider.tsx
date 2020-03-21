import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import useIsInAuth from '../../../hooks/use-is-in-auth';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const NavSider = () => {
  const [isInAuth] = useIsInAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      width={200}
      className="site-layout-background"
      style={{ display: isInAuth ? 'none' : 'block' }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <UserOutlined />
              subnav 1
            </span>
          }
        >
          <Menu.Item onClick={() => setIsCollapsed(!isCollapsed)} key="1">
            option1
          </Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <LaptopOutlined />
              subnav 2
            </span>
          }
        >
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <NotificationOutlined />
              subnav 3
            </span>
          }
        >
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default NavSider;
