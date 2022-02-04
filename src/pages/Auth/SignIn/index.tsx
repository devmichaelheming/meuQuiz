import { GoogleOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import Logo from "~/assets/logo-quiz.png";
import { AuthContext } from "~/context/authContext";
import { Button, Form, Input, Modal } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  SectionBanner,
  SectionSignIn,
  Header,
  Logotipo,
  Body,
  TitleBody,
  ButtonAction,
  SectionIconGoogle,
  LinkEnterAsAGuest,
  Separator,
} from "./styles";

const SignIn: React.FC = () => {
  const { signIn, signed } = useContext(AuthContext);
  const [form] = Form.useForm();

  const handleSignInWithGoogle = () => {
    signIn();
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onCreate = (values: any) => {
    const { nome } = values;
    signIn(nome);
  };

  return (
    <Container>
      <SectionBanner />
      <SectionSignIn>
        <Header>
          <Logotipo src={Logo} />
        </Header>
        <Body>
          <TitleBody>Crie o seu quiz e mande para os seu amigos!</TitleBody>
          {!signed ? (
            <>
              <ButtonAction onClick={handleSignInWithGoogle}>
                <SectionIconGoogle>
                  <GoogleOutlined style={{ fontSize: "22px" }} />
                </SectionIconGoogle>
                <span>Entrar com o Google</span>
              </ButtonAction>
              <Separator>Ou</Separator>
              <Button className="buttonLink" onClick={showModal}>
                <LinkEnterAsAGuest>Entrar como convidado</LinkEnterAsAGuest>
              </Button>
              <Modal
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                okText="Continuar"
                centered
                onOk={() => {
                  form
                    .validateFields()
                    .then((values) => {
                      form.resetFields();
                      onCreate(values);
                    })
                    .catch((info) => {
                      console.log("Validate Failed:", info);
                    });
                }}
              >
                <Form
                  form={form}
                  layout="vertical"
                  name="form_in_modal"
                  initialValues={{ modifier: "public" }}
                >
                  <Form.Item
                    name="nome"
                    label="Insira seu nome"
                    rules={[
                      {
                        required: true,
                        message: "Por favor, insira o nome do cliente!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form>
              </Modal>
            </>
          ) : (
            <ButtonAction>
              <Link to="/createQuiz">
                <SectionIconGoogle>
                  <AppstoreAddOutlined style={{ fontSize: "22px" }} />
                </SectionIconGoogle>
                <span>Criar meu quiz</span>
              </Link>
            </ButtonAction>
          )}
        </Body>
      </SectionSignIn>
    </Container>
  );
};

export default SignIn;
