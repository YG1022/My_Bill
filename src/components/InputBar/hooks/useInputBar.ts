import moment from 'moment';
import { addBillItem } from '../../../pages/AccountBook/services/addBillItem';

const useInputBar = (form) => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const dateStamp: string = moment().format('YYYY-MM-DD HH:mm:ss');

    const onFinish = async (values: { amount: string }) => {
        const { data, error: sqlError } = await addBillItem(values.amount, dateStamp);
        if (sqlError) {
            console.log(sqlError);
        }
        if (data) {
            form.resetFields();
        }
    };

    return { layout, tailLayout, onFinish };
};

export { useInputBar };