import { Button, Divider, List, Tag } from 'antd';
import React from 'react';
import { transListProps } from '../../constants/types';
import { useTransList } from './hooks/useTransList';
import './TransList.scss';
import { NavLink } from 'react-router-dom';

const TransList: React.FC<transListProps> = ({ amountList, category }) => {
  const { transactions, totalAmount, deleteTrans } = useTransList(amountList, category);

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
        data-testid="list-content"
        bordered
        dataSource={transactions}
        renderItem={transaction => (
          <List.Item data-testid="item">
            <span className="item-amount">{transaction.amount}</span>
            <span className="item-tag">
              {transaction.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </span>
            <span>
              <NavLink to={`/input/${transaction.id}`}>Edit</NavLink>
            </span>
            <span>
              <Button type="link" className="item-delete" onClick={deleteTrans(transaction.id)}>
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
