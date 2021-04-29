import { Col, Row, Typography, List, Card, Tag, Divider } from "antd";

import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { getLast } from "../helpers/getLast";

import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;
export const Tail = () => {
  useHideMenu(true);
  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    socket.on("ticket-assigned", (assignedTickets) => {
      setTickets(assignedTickets);
    });
    return () => {
      socket.off("ticket-assigned");
    };
  }, [socket]);

  useEffect(() => {
    getLast().then((lastTickets) => {
      setTickets(lastTickets);
    });
  }, []);
  return (
    <>
      <Title lavel={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(ticket) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{ticket.agent}</Tag>,
                    <Tag color="magenta">Escritorio: {ticket.desk}</Tag>,
                  ]}
                >
                  <Title>Nº {ticket.number}</Title>
                </Card>
              </List.Item>
            )}
          ></List>
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(ticket) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket nº ${ticket.number}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta">{ticket.number}</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="volcano">{ticket.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          ></List>
        </Col>
      </Row>
    </>
  );
};
