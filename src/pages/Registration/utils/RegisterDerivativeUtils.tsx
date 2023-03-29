import React from 'react';
import { Form, Select } from 'antd';

const RegisterDerivativeUtils = (form) => {
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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="852">+852</Select.Option>
      </Select>
    </Form.Item>
  );

  const passwordValidator = {
    validator(_, value) {
      if (!value || form.getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The two passwords that you entered do not match!'));
    },
  };

  return { prefixSelector, formItemLayout, tailFormItemLayout, dateFormat, passwordValidator };
};

export default RegisterDerivativeUtils;
