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
        className="input-content"
        name="amount"
        label="Amount"
        rules={[{ required: true, message: 'Please input number!' }]}
      >
        <InputNumber placeholder="Please input number" style={{ width: 300 }} />
      </Form.Item>
      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
        <Select style={{ width: 300 }}>
          <Select.Option value="+">Income</Select.Option>
          <Select.Option value="-">Expenses</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout} shouldUpdate>
        {() => (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default InputAmount;
