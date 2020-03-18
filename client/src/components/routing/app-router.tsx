import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import "./router.scss";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";

const AppRouter = (props: any) => {
  const [isInAuth, setIsInAuth] = useState(false);

  useEffect(() => {
    if (props.history.location.pathname.split("/")[1] === "auth") {
      setIsInAuth(true);
    } else {
      setIsInAuth(false);
    }
  }, [props.history]);

  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        className="header"
        style={{ display: isInAuth ? "none" : "block" }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">ΠΙΝΑΚΑΣ</Menu.Item>
          <Menu.Item key="2">ITEM 2</Menu.Item>
          <Menu.Item key="3">ITEM 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          style={{ display: isInAuth ? "none" : "block" }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
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
              <Menu.Item key="1">option1</Menu.Item>
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
        <Layout>
          <Content className="site-layout-background">
            <Switch>
              <Route path="/auth/login">
                <Login />
              </Route>
              <Route path="/auth/register">
                <Register />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default withRouter(AppRouter);
