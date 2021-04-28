import React, { useContext } from "react";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Enterokay } from "../components/Enterokay";
import { Tail } from "../components/Tail";
import { CreateTicket } from "../components/CreateTicket";
import { Desk } from "../components/Desk";
import { UIContext } from "../context/UIContext";
// import { Enterokay } from "../components/Enterokay";
// import { Tail } from "../components/Tail";
// import { CreateTicket } from "../components/CreateTicket";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const { hideMenu } = useContext(UIContext);
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={hideMenu}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/enter"> Ingresar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/tail"> Fila de tickets</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/create"> Creae Tikcet</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/enter" component={Enterokay} />
              <Route path="/tail" component={Tail} />
              <Route path="/create" component={CreateTicket} />

              <Route path="/desk" component={Desk} />

              <Redirect to="/enter" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
