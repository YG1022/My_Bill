import { addTransItem } from '../../../services/addTransItem';
import { useSqlErrorStore } from '../../../zustand/useSqlErrorStore';

const useInputAmount = (form, id: string | null) => {
  const { sqlError, setSqlError } = useSqlErrorStore();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = async values => {
    const { data, error } = await addTransItem(values, id);
    if (error) {
      setSqlError(error);
      console.log(sqlError);
    }
    if (data) {
      form.resetFields();
      setSqlError(null);
    }
  };

  return { layout, tailLayout, onFinish };
};

export { useInputAmount };
