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

  const deleteTrans = (id: number | number[]) => {
    const handleId = async (id: number) => {
      await deleteTransItem(id);
      deleteTransWithId(id);
    };
    const handleIds = async (ids: number[]) => {
      ids.forEach(async id => await deleteTransItem(id));

      deleteTransWithIds(ids);
      clearSelectedId();
    };

    const deleteSelectedTrans = async () => {
      typeof id === 'number' ? await handleId(id) : await handleIds(id);
    };

    return () => {
      Modal.confirm({
        title: `Are you really want to destroy ${
          typeof id === 'number' ? 'this rtansaction' : 'selected transactions'
        }?`,
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
