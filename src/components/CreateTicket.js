import { Button, Col, Row, Typography } from "antd";
import React, { useContext, useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";
const { Text, Title } = Typography;
export const CreateTicket = () => {
  useHideMenu(true);
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState({});

  const newTicket = () => {
    socket.emit("request-ticket", null, (ticket) => {
      console.log(ticket);
      setTicket(ticket);
    });
  };

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione el botón para un nuevo ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={newTicket}
          >
            Nuevo ticket
          </Button>
        </Col>
      </Row>
      {ticket && (
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={6} align="center">
            <Text level={2}>Su numero </Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }}>
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};
