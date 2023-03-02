import { Button, Form, Input } from 'antd';
import React from 'react';
import { useInputAmount } from './hooks/useInputAmount';

const InputAmount: React.FC = () => {
  const [form] = Form.useForm();
  const { layout, tailLayout, onFinish } = useInputAmount(form);

  return (
    <div style={{ height: 100 }}>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
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
    </div>
  );
};

export default InputAmount;
