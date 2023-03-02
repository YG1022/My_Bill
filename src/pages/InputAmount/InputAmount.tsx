import { Button, Form, Input } from 'antd';
import React from 'react';
import { useInputAmount } from './hooks/useInputAmount';
import './InputAmount.scss';

const InputAmount: React.FC = () => {
  const [form] = Form.useForm();
  const { layout, tailLayout, onFinish } = useInputAmount(form);

  return (
    <Form className="input-amount" {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        className="input-content"
        name="amount"
        label="Amount"
        rules={[{ required: true, message: 'Please input number!' }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputAmount;
