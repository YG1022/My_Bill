import { transItem } from '../../../constants/types';
import { deleteTransItem } from '../../../services/deleteTransItem';
import { Modal } from 'antd';
import { useTransStore } from '../../../stores/useTransStore';
import Decimal from 'decimal.js';
import { shallow } from 'zustand/shallow';

const useTransList = (amountList: Array<transItem>, category: string) => {
  const { deleteTransWithId } = useTransStore();
  const { deleteTransWithIds, clearSelectedId } = useTransStore(
    state => ({
      deleteTransWithIds: state.deleteTransWithIds,
      clearSelectedId: state.clearSelectedId,
    }),
    shallow
  );

  const totalAmount: Decimal = new Decimal(
    amountList
      .filter(item => item.category === category)
      .reduce((total, curr) => Decimal.add(total, curr.amount), new Decimal(0)) || 0
  );

  const transactions: Array<transItem> = amountList.filter(item => item.category === category);

  const deleteTrans = (id: number) => {
    const deleteSelectedTrans = async () => {
      await deleteTransItem(id);
      deleteTransWithId(id);
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

  const deleteSelectedTransItems = (selectedId: number[]) => {
    const deleteMultiSelectedTrans = async () => {
      selectedId.forEach(async id => await deleteTransItem(id));

      deleteTransWithIds(selectedId);
      clearSelectedId();
    };

    return () => {
      Modal.confirm({
        title: `Are you really want to destroy selected transactions?`,
        okText: 'Sure',
        cancelText: 'Cancel',
        centered: true,
        onOk: deleteMultiSelectedTrans,
      });
    };
  };

  return { totalAmount, transactions, deleteTrans, deleteSelectedTransItems };
};

export { useTransList };
