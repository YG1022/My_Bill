import { addTransItem } from '../../../services/addTransItem';
import { useSqlErrorStore } from '../../../zustand/useSqlErrorStore';
import { getTransItems } from '../../../services/getTransItems';
import { transItem } from '../../../constants/types';

const useInputAmount = (form, id: string | null) => {
  const { sqlError, setSqlError } = useSqlErrorStore();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const autoFillInfo = (id: string): void => {
    getTransItems(Number(id)).then(({ data }) => {
      const { amount, category, tags } = data[0] as transItem;
      form.setFieldsValue({
        amount: amount,
        category: category,
        tags: { tags: tags },
      });
    });
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

  return { layout, tailLayout, autoFillInfo, onFinish };
};

export { useInputAmount };
