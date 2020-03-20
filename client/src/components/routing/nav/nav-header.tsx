import React from "react";
import { Layout, Menu } from "antd";
import useIsInAuth from "../../../hooks/is-in-auth";

const NavHeader = () => {
  const { Header } = Layout;
  const [isInAuth] = useIsInAuth();

  return (
    <Header className="header" style={{ display: isInAuth ? "none" : "block" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">ΠΙΝΑΚΑΣ</Menu.Item>
        <Menu.Item key="2">ITEM 2</Menu.Item>
        <Menu.Item key="3">ITEM 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavHeader;
