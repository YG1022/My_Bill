import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { useNavigate } from 'react-router-dom';
import createProfile from '../../services/createProfile';
import { ROUTES } from '../../constants/routes';

const EditProfiles = () => {
  const navigateTo = useNavigate();
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="852">+852</Select.Option>
      </Select>
    </Form.Item>
  );
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

  const finilizeProfiles = async () => {
    await createProfile(form.getFieldsValue());
    navigateTo(ROUTES.home);
  };

  return (
    <PageContainer>
      <Form
        {...formItemLayout}
        form={form}
        name="editprofiles"
        onFinish={finilizeProfiles}
        initialValues={{ prefix: '86' }}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="Please input your E-mail!" />
        </Form.Item>
        <Form.Item label="Phone Number" name="phonenumber">
          <Input
            addonBefore={prefixSelector}
            style={{ width: '100%' }}
            placeholder="Please input your phone number!"
          />
        </Form.Item>
        <Form.Item label="Introduction" name="introduction">
          <Input.TextArea
            showCount
            maxLength={100}
            placeholder="Please input Introduction of yourself!"
          />
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Select placeholder="Please select your gender!">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default EditProfiles;
