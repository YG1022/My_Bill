import { transItem } from '../../../constants/types';
import { deleteTransItem } from '../../../services/deleteTransItem';
import { Modal } from 'antd';
import { useTransStore } from '../../../zustand/useTransStore';

const useTransList = (amountList: Array<transItem>, category: string) => {
  const { deleteTransWithId } = useTransStore();

  const totalAmount: number = amountList
    .filter(item => item.category === category)
    .reduce((total, curr) => total + Number(curr.amount), 0) || 0;

  const transactions: Array<transItem> = amountList
    .filter(item => item.category === category);

  const deleteTrans = (id: number) => {
    const deleteSelectedTrans = async () => {
      await deleteTransItem(id);
      deleteTransWithId(id);
      console.log(amountList);
    };

    return () => {
      Modal.confirm({
        title: `Are you really want to destroy this transaction？`,
        okText: 'Sure',
        cancelText: 'Cancel',
        centered: true,
        onOk: deleteSelectedTrans,
      });
    };
  };

  return { totalAmount, transactions, deleteTrans };
};

export { useTransList };
