import { Button, Divider, List, Modal, Tag } from 'antd';
import React from 'react';
import { transListProps } from '../../constants/types';
import { useTransList } from './hooks/useTransList';
import './TransList.scss';
import { deleteTransItem } from '../../services/deleteTransItem';

const TransList: React.FC<transListProps> = ({ amountList, category }) => {
  const { transactions, totalAmount } = useTransList(amountList, category);

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

  return (
    <div className='bills-list'>
      <Divider className='bills-divider' orientation='left'>
        {category === '+' ? 'Income' : 'Expenses'} List
      </Divider>
      <div className='amount-content'>
        <span>The amount of all the {category === '+' ? 'income' : 'expenses'} is $</span>
        <span className='amount' data-testid='amount'>
          {totalAmount}
        </span>
      </div>
      <List
        className='list-content'
        data-testid='list-content'
        bordered
        dataSource={transactions}
        renderItem={transaction => (
          <List.Item data-testid='item'>
            <span className='item-amount'>{transaction.amount}</span>
            <span className='item-tag'>
              {transaction.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </span>
            <span>
              <Button type='link' className='item-delete' onClick={deleteTrans(transaction.id)}>
                Delete
              </Button>
            </span>
          </List.Item>
        )}
      ></List>
    </div>
  );
};
export default TransList;
