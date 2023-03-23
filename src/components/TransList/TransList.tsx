import { Button, Checkbox, Divider, List, Tag } from 'antd';
import React from 'react';
import { transListProps } from '../../constants/types';
import { useTransList } from './hooks/useTransList';
import './TransList.scss';
import { NavLink } from 'react-router-dom';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

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
          {totalAmount.toString()}
        </span>
      </div>
      <List
        className="list-content"
        data-testid="list-content"
        bordered
        dataSource={transactions}
        renderItem={transaction => (
          <List.Item data-testid="item">
            <span>
              <Checkbox
                onChange={(e: CheckboxChangeEvent) => {
                  console.log(`checked = ${e.target.checked}`);
                  console.log(transaction.id);
                }}
              />
            </span>
            <span className="item-amount">{transaction.amount}</span>
            <span className="item-tag">
              {transaction.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </span>
            <span>
              <NavLink to={`/transactions/trans-edit/${transaction.id}`}>Edit</NavLink>
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
