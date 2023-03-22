import { addTransItem } from '../../../services/addTransItem';
import { useSqlErrorStore } from '../../../zustand/useSqlErrorStore';
import { getTransItems } from '../../../services/getTransItems';
import { transItem } from '../../../constants/types';
import { useTransStore } from '../../../zustand/useTransStore';

const useInputAmount = (form, id: string | null) => {
  const addTrans = useTransStore(state => state.addTrans);
  const setSqlError = useSqlErrorStore(state => state.setSqlError);

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
      console.log('Error: ' + useSqlErrorStore.getState().sqlError.message);
    }
    if (data) {
      form.resetFields();
      setSqlError(null);
      addTrans(data[0]);
    }
  };

  return { layout, tailLayout, autoFillInfo, onFinish };
};

export { useInputAmount };
