import { Button, ConfigProvider, Form, Input, Row } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import useSignIn from "./hooks/useSignIn";
import "./SignIn.scss";

const SignIn: React.FC = () => {
  const [form] = Form.useForm();
  const { signIn } = useSignIn(form);

  return (
    <PageContainer>
      <Row className="sign-in-row">
        <Form
          name="normal_login"
          className="login-form"
          form={form}
          initialValues={{ remember: true }}
          onFinish={signIn}
        >
          <Form.Item name="accountname" rules={[{ required: true }]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Account Name"
            />
          </Form.Item>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorError: "#d9d9d9",
                  colorErrorBorderHover: "#1677ff",
                  colorErrorOutline: "#EBF4FE",
                },
              },
            }}
          >
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
          </ConfigProvider>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </PageContainer>
  );
};

export default SignIn;
