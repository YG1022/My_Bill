import { Button, Form, Input, Row } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import useSignIn from "./hooks/useSignIn";

const SignIn: React.FC = () => {
  const [form] = Form.useForm();
  const { signIn } = useSignIn(form);

  return (
    <PageContainer>
      <Row style={{ minHeight: "100%", alignItems: "center", justifyContent: "center" }}>
        <Form
          name="normal_login"
          className="login-form"
          form={form}
          initialValues={{ remember: true }}
          onFinish={signIn}
          style={{
            width: 400,
            padding: 50,
            borderRadius: 10,
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form.Item name="accountname" rules={[{ required: true }]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Account Name"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
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
