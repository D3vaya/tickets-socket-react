import React, { useState } from "react";
import { Col, Row, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUserStorage } from "../helpers/getUserStorage";
import { Redirect, useHistory } from "react-router";
const { Title, Text } = Typography;

export const Desk = () => {
  useHideMenu(false);
  const [user] = useState(getUserStorage);
  const history = useHistory();
  const exit = () => {
    localStorage.clear();
    history.replace("/enter");
  };
  const nextTicket = () => {
    console.log("next ticket");
  };
  if (!user.agent && !user.desk) {
    <Redirect to="/enter" />;
  }
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>Usted esta trabajando en el escritoio: </Text>
          <Text type="success">{user.desk}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={exit}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Está atendiendo el ticket número: </Text>
          <Text type="danger" style={{ fontSize: 30 }}>
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={nextTicket} shape="round" type="primary">
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
