import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import React from 'react';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { NavLink, useNavigate } from 'react-router-dom';
import createProfile from '../../services/createProfile';
import { ROUTES } from '../../constants/routes';

const EditProfiles = () => {
  const navigateTo = useNavigate();
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select>
        <Select.Option value='86'>+86</Select.Option>
        <Select.Option value='852'>+852</Select.Option>
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
  const dateFormat = 'YYYY/MM/DD';

  const finilizeProfiles = async () => {
    const { birthday, ...extraData } = form.getFieldsValue();
    const postData = { birthday: birthday?.format('YYYY/MM/DD'), ...extraData };

    await createProfile(postData);
    navigateTo(ROUTES.home);
  };

  return (
    <PageContainer>
      <Row style={{ minHeight: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Form
          {...formItemLayout}
          form={form}
          name='editprofiles'
          onFinish={finilizeProfiles}
          initialValues={{ prefix: '86' }}
          style={{
            width: 600,
            padding: 50,
            borderRadius: 10,
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          }}
          scrollToFirstError
        >
          <Form.Item
            label='E-mail'
            name='email'
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
            <Input placeholder='Please input your E-mail!' />
          </Form.Item>
          <Form.Item label='Real Name' name='realname' tooltip='Your name in the real world!'>
            <Input placeholder='Please input your real name!' />
          </Form.Item>
          <Form.Item label='Gender' name='gender'>
            <Select placeholder='Please select your gender!'>
              <Select.Option value='male'>Male</Select.Option>
              <Select.Option value='female'>Female</Select.Option>
              <Select.Option value='other'>Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='Phone Number' name='phonenumber'>
            <Input
              addonBefore={prefixSelector}
              style={{ width: '100%' }}
              placeholder='Please input your phone number!'
            />
          </Form.Item>
          <Form.Item label='Birthday' name='birthday' rules={[{ type: 'date' }]}>
            <DatePicker style={{ width: 333.33 }} format={dateFormat} placeholder='Select your birthday!' />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Button
              style={{ marginLeft: 30 }}
              type='primary'
              onClick={async () => {
                await createProfile(form.getFieldsValue());
              }}
            >
              <NavLink to={ROUTES.home}>Skip</NavLink>
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </PageContainer>
  );
};

export default EditProfiles;
