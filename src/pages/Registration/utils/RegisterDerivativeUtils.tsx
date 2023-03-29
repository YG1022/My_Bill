import React from 'react';
import { Form, Select } from 'antd';
const RegisterDerivativeUtils = () => {
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
  return { prefixSelector, formItemLayout, tailFormItemLayout, dateFormat };
};

export default RegisterDerivativeUtils;
