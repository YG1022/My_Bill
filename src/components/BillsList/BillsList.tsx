import { Divider, List } from 'antd';
import React from 'react';
import { billsListProps } from '../../constants/types';
import { useBillsList } from './hooks/useBillsList';
import './BillsList.scss';

const BillsList: React.FC<billsListProps> = ({ amountList, category }) => {
  const { transactions, totalAmount } = useBillsList(amountList, category);

  return (
    <div className='bills-list'>
      <Divider className='bills-divider' orientation='left'>
        Transactions List
      </Divider>
      <div className='amount-content'>
        <span>The amount of all the bills is $</span>
        <span className='amount' data-testid='amount'>
          {totalAmount}
        </span>
      </div>
      <List
        className='list-content'
        bordered
        dataSource={transactions}
        renderItem={transaction => <List.Item>{transaction.amount} - {transaction.tags}</List.Item>}
      ></List>
    </div>
  );
};
export default BillsList;
