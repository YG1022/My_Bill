import { Button, Form, InputNumber, Select } from 'antd';
import React from 'react';
import { useInputAmount } from './hooks/useInputAmount';
import './InputAmount.scss';

const InputAmount: React.FC = () => {
  const [form] = Form.useForm();
  const { layout, tailLayout, onFinish } = useInputAmount(form);

  return (
    <Form className="input-amount" {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="amount"
        label="Amount"
        rules={[{ required: true, message: 'Please input number!' }]}
      >
        <InputNumber className="input-bar" placeholder="Please input number" />
      </Form.Item>
      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: 'Please select category!' }]}
      >
        <Select className="select-bar">
          <Select.Option value="+">Income</Select.Option>
          <Select.Option value="-">Expenses</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout} shouldUpdate>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputAmount;
