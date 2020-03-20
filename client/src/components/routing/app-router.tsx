import React, { useEffect } from "react";
import { Route, Switch, withRouter, useHistory } from "react-router-dom";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import "./router.scss";
import { Layout, Menu } from "antd";

import NavHeader from "./nav/nav-header";
import NavSider from "./nav/nav-sider";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/authSlice";
import { BrowserRouter as Router } from "react-router-dom";

const AppRouter = (props: any) => {
    const { Content } = Layout;
    const { auth } = useSelector(selectAuth);
    let history = useHistory();

    useEffect(() => {
        console.log(history);
        if (!auth.isLoggedIn && history.location.pathname.split("/")[1] !== "auth") {
            history.push("/auth/login");
        }
    }, [history.location.pathname]);

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
