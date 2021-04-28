import React, { useState } from "react";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";

import { SaveOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { Redirect, useHistory } from "react-router";
import { getUserStorage } from "../helpers/getUserStorage";

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
export const Enterokay = () => {
  const history = useHistory();
  const [user] = useState(getUserStorage);
  useHideMenu(false);

  const onFinish = ({ agent, desk }) => {
    localStorage.setItem("agent", agent);
    localStorage.setItem("desk", desk);

    history.push("/desk", agent);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (user.agent && user.desk) {
    return <Redirect to="/desk" />;
  }
  return (
    <>
      <Title label={2}>Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Divider />
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="nombre del agente"
          name="agent"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su nombre",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="desk"
          rules={[
            {
              required: true,
              message: "Ingrese el numero de escritorio",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          {...tailLayout}
          name="remember"
          valuePropName="checked"
        ></Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
