import { Divider, List, Tag } from 'antd';
import React from 'react';
import { billsListProps } from '../../constants/types';
import { useBillsList } from './hooks/useBillsList';
import './BillsList.scss';

const BillsList: React.FC<billsListProps> = ({ amountList, category }) => {
  const { transactions, totalAmount } = useBillsList(amountList, category);

  return (
    <div className="bills-list">
      <Divider className="bills-divider" orientation="left">
        {category === '+' ? 'Income' : 'Expenses'} List
      </Divider>
      <div className="amount-content">
        <span>The amount of all the {category === '+' ? 'income' : 'expenses'} is $</span>
        <span className="amount" data-testid="amount">
          {totalAmount}
        </span>
      </div>
      <List
        className="list-content"
        bordered
        dataSource={transactions}
        renderItem={transaction => (
          <List.Item>
            <span className="item-amount">{transaction.amount}</span>
            <span className="item-tag">
              {transaction.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </span>
          </List.Item>
        )}
      ></List>
    </div>
  );
};
export default BillsList;
