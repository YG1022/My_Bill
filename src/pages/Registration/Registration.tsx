import { Button, Form, Input, Row } from "antd";
import React from "react";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import RegisterDerivativeUtils from "./utils/RegisterDerivativeUtils";
import "./Registration.scss";
import useRegistration from "./hooks/useRegistration";

const Registration: React.FC = () => {
  const [form] = Form.useForm();

  const { formItemLayout, tailFormItemLayout, passwordValidator } = RegisterDerivativeUtils(form);
  const { toNextStep } = useRegistration(form);

  return (
    <PageContainer>
      <Row className="register-row">
        <Form
          className="register-form"
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={toNextStep}
          scrollToFirstError
        >
          <Form.Item
            label="Account Name"
            name="accountname"
            tooltip="What do you want others to call you?"
            rules={[
              { required: true, message: "Please input your account name!", whitespace: true },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmpassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },
              () => passwordValidator,
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </PageContainer>
  );
};

export default Registration;
