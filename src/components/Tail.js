import { Col, Row, Typography, List, Card, Tag, Divider } from "antd";

import React from "react";

import { mockData } from "../data/mock";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;
export const Tail = () => {
  useHideMenu(true);
  return (
    <>
      <Title lavel={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={mockData.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">Escritorio: {item.escritorio}</Tag>,
                  ]}
                >
                  <Title>Nº {item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          ></List>
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={mockData.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket nº ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta">{item.ticketNo}</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="volcano">{item.agente}</Tag>
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
