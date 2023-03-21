import { Button, Form, InputNumber, Select } from 'antd';
import React, { useEffect } from 'react';
import { CustomTags } from '../../components/CustomTags/CustomTags';
import { useInputAmount } from './hooks/useInputAmount';
import './InputAmount.scss';
import { useParams } from 'react-router-dom';

const InputAmount: React.FC = () => {
  const [form] = Form.useForm();
  const { layout, tailLayout, onFinish } = useInputAmount(form);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      form.setFieldsValue({ amount: '1000' });
    }
  });

  return (
    <Form className='input-amount' {...layout} form={form} name='control-hooks' onFinish={onFinish}>
      <Form.Item
        name='amount'
        label='Amount'
        rules={[{ required: true, message: 'Please input number!' }]}
      >
        <InputNumber
          className='input-bar'
          formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value!.replace(/\$\s?|(,*)/g, '')}
          placeholder='Please input number'
        />
      </Form.Item>
      <Form.Item
        name='category'
        label='Category'
        rules={[{ required: true, message: 'Please select category!' }]}
      >
        <Select className='select-bar'>
          <Select.Option value='+'>Income</Select.Option>
          <Select.Option value='-'>Expenses</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item className='transactions-tags' name='tags' label='Tags'>
        <CustomTags />
      </Form.Item>
      <Form.Item {...tailLayout} shouldUpdate>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputAmount;
