import { addTransItem } from '../../../services/addTransItem';

const useInputAmount = form => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = async values => {
    const { data, error: sqlError } = await addTransItem(values);
    if (sqlError) {
      console.log(sqlError);
    }
    if (data) {
      form.resetFields();
    }
  };

  return { layout, tailLayout, onFinish };
};

export { useInputAmount };
