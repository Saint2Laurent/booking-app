import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import "./router.scss";
import { Layout, Menu } from "antd";

import NavHeader from "./nav/nav-header";
import NavSider from "./nav/nav-sider";

const AppRouter = (props: any) => {
  const { Content } = Layout;

  return (
    <Layout style={{ height: "100vh" }}>
      <NavHeader />

      <Layout>
        <NavSider />
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

export default AppRouter;
