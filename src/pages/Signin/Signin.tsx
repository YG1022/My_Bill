import { Button, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { PageContainer } from '../../components/PageContainer/PageContainer';

const Signin: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <PageContainer>
      <Row style={{ minHeight: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{
            width: 400,
            padding: 50,
            borderRadius: 10,
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          }}
        >
          <Form.Item
            name="accountname"
            // rules={[{ required: true, message: 'Please input your Username!' }]}
            rules={[{ required: true }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Account Name"
            />
          </Form.Item>
          <Form.Item
            name="password"
            // rules={[{ required: true, message: 'Please input your Password!' }]}
            rules={[{ required: true }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign in
            </Button>
            {/* Or <NavLink to={ROUTES.registration}>register now!</NavLink> */}
          </Form.Item>
        </Form>
      </Row>
    </PageContainer>
  );
};

export default Signin;
