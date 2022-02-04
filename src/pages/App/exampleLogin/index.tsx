import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "~/assets/logo.png";
import { Input, Form, Button, Checkbox, Row, Col } from "antd";
import React from "react";

import {
  Container,
  SectionHeader,
  Logotipo,
  SectionBody,
  TitleBody,
  SectionFooter,
} from "./styles";

interface FormProps {
  username: string;
  password: string;
}
const exampleLogin: React.FC = () => {
  const onFinish = (values: FormProps) => {
    const { username, password } = values;
    console.log(`Username is: ${username}, and password is: ${password}`);
  };

  return (
    <Container>
      <SectionHeader>
        <Logotipo src={Logo} />
      </SectionHeader>
      <SectionBody>
        <TitleBody>Faça o login para criar seu Quiz!</TitleBody>
        <Form
          name="normal_login"
          className="login-form"
          size="large"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Entrar
            </Button>
            Ou <a href="#top">Registre-se agora!</a>
          </Form.Item>
        </Form>
      </SectionBody>
      <SectionFooter>Footer</SectionFooter>
    </Container>
  );
};

export default exampleLogin;
