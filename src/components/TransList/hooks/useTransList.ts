import { transItem } from '../../../constants/types';
import { deleteTransItem } from '../../../services/deleteTransItem';
import { Modal } from 'antd';

const useTransList = (amountList: Array<transItem>, category: string) => {
  let totalAmount: number = 0;
  totalAmount = amountList
    .filter(item => item.category === category)
    .reduce((total, curr) => total + Number(curr.amount), 0);

  const transactions: Array<transItem> = amountList
    .filter(item => item.category === category);

  const deleteTrans = (id: number) => {
    const deleteSelectedTrans = async () => {
      await deleteTransItem(id);
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
