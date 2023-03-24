import { Button, Divider, Table } from 'antd';
import React, { useEffect, useRef } from 'react';
import { transItem, transListProps } from '../../constants/types';
import { useTransList } from './hooks/useTransList';
import './TransList.scss';
import { useTransStore } from '../../stores/useTransStore';
import { shallow } from 'zustand/shallow';
import { getColumns } from './hooks/getColumns';

const TransList: React.FC<transListProps> = ({ amountList, category }) => {
  const { transactions, totalAmount, deleteTrans } = useTransList(amountList, category);
  const { selectedId, setSelectedId, clearSelectedId } = useTransStore(
    state => ({
      selectedId: state.selectedId,
      setSelectedId: state.setSelectedId,
      clearSelectedId: state.clearSelectedId,
    }),
    shallow,
  );
  const { current: idsDeps } = useRef(selectedId);

  useEffect(() => {
    clearSelectedId();
  }, [idsDeps]);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => setSelectedId(selectedRowKeys as number[]),
    getCheckboxProps: (record: transItem) => ({ name: record.amount }),
  };

  return (
    <div className='bills-list'>
      <Divider className='bills-divider' orientation='left'>
        {category === '+' ? 'Income' : 'Expenses'} List
      </Divider>
      <div className='amount-content'>
        <span>The amount of all the {category === '+' ? 'income' : 'expenses'} is $</span>
        <span className='amount' data-testid='amount'>
          {totalAmount.toString()}
        </span>
        <Button type='link' className='delete-selected' onClick={deleteTrans(selectedId)}>
          Delete
        </Button>
      </div>
      <Table
        rowSelection={{ type: 'checkbox', ...rowSelection }}
        rowKey={record => record.id}
        columns={getColumns(deleteTrans)}
        dataSource={transactions}
      />
    </div>
  );
};
export default TransList;
