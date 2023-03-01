import { Button, Form, Input } from 'antd';
import React from 'react';
import { addBillItem } from '../../pages/AccountBook/services/addBillItem';
import moment from 'moment/moment';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const dateStamp: string = moment().format('YYYY-MM-DD HH:mm:ss');

const InputBar: React.FC = () => {
    const [form] = Form.useForm();
    const onFinish = async (values: { amount: string }) => {
        const { data, error: sqlError } = await addBillItem(values.amount, dateStamp);
        if (sqlError) {
            console.log(sqlError);
        }
        if (data) {
            form.resetFields();
        }
    };

    return (
        <div style={{ height: 100 }}>
            <Form
                {...layout}
                form={form}
                name='control-hooks'
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >
                <Form.Item
                    name='amount'
                    label='Amount'
                    rules={[{ required: true, message: 'Please input number!' }]}
                >
                    <Input type='number' />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default InputBar;
