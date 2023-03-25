import { Button, Divider, Table } from 'antd';
import React, { useEffect, useRef } from 'react';
import { transListProps } from '../../constants/types';
import { useTransList } from './hooks/useTransList';
import './TransList.scss';
import { useTransStore } from '../../stores/useTransStore';
import { shallow } from 'zustand/shallow';
import { getColumns } from './hooks/getColumns';

const TransList: React.FC<transListProps> = ({ amountList, category }) => {
  const { transactions, totalAmount, rowSelection, deleteTrans } = useTransList(
    amountList,
    category
  );
  const { selectedId, clearSelectedId } = useTransStore(
    state => ({
      selectedId: state.selectedId,
      clearSelectedId: state.clearSelectedId,
    }),
    shallow
  );
  const { current: idsDeps } = useRef(selectedId);

  useEffect(() => {
    clearSelectedId();
  }, [idsDeps]);

  return (
    <div className="bills-list">
      <Divider className="bills-divider" orientation="left">
        {category === '+' ? 'Income' : 'Expenses'} List
      </Divider>
      <div className="amount-content">
        <span>The amount of all the {category === '+' ? 'income' : 'expenses'} is $</span>
        <span className="amount" data-testid="amount">
          {totalAmount.toString()}
        </span>
        <Button type="link" className="delete-selected" onClick={deleteTrans(selectedId)}>
          Delete
        </Button>
      </div>
      <Table
        data-testid="list-content"
        rowSelection={{ type: 'checkbox', ...rowSelection }}
        rowKey={record => record.id}
        columns={getColumns(deleteTrans)}
        dataSource={transactions}
      />
    </div>
  );
};
export default TransList;
