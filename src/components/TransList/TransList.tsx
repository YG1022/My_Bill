import { Button, Divider, Table, Tag } from 'antd';
import React, { useEffect, useRef } from 'react';
import { transItem, transListProps } from '../../constants/types';
import { useTransList } from './hooks/useTransList';
import './TransList.scss';
import { NavLink } from 'react-router-dom';
import { useTransStore } from '../../stores/useTransStore';
import { shallow } from 'zustand/shallow';
import { ColumnsType } from 'antd/es/table';

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

  const columns: ColumnsType<transItem> = [
    {
      title: 'Amount',
      dataIndex: 'amount',
      width: 120,
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      ellipsis: true,
      render: (tags: string[]) => (
        <span className='trans-tags'>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </span>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_text, record: transItem) => (
        <span className='trans-actions'>
          <NavLink to={`/transactions/trans-edit/${record.id}`}>Edit</NavLink>
          <Button type='link' className='item-delete' onClick={deleteTrans(record.id)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

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
        columns={columns}
        dataSource={transactions}
      />
    </div>
  );
};
export default TransList;
