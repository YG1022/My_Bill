import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { ROUTES } from '../../constants/routes';
import createUser from '../../services/createUser';

const Registration: React.FC = () => {
  const navigateTo = useNavigate();
  const [form] = Form.useForm();

  const toNextStep = async () => {
    navigateTo(ROUTES.profilesEdit);
    await createUser(form.getFieldsValue());
  };

  const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 16, offset: 8 },
    },
  };

  return (
    <PageContainer>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={toNextStep}
        style={{
          maxWidth: 600,
          margin: '0 auto',
          marginBlock: 280,
          padding: 50,
          borderRadius: 10,
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        }}
        scrollToFirstError
      >
        <Form.Item
          label="Account Name"
          name="accountname"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your account name!', whitespace: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmpassword"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              },
            }),
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
    </PageContainer>
  );
};

export default Registration;
