import { Button, Checkbox, Divider, List, Tag } from 'antd';
import React from 'react';
import { transListProps } from '../../constants/types';
import { useTransList } from './hooks/useTransList';
import './TransList.scss';
import { NavLink } from 'react-router-dom';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useTransStore } from '../../stores/useTransStore';
import { shallow } from 'zustand/shallow';

const TransList: React.FC<transListProps> = ({ amountList, category }) => {
  const { transactions, totalAmount, deleteTrans } = useTransList(amountList, category);
  const { selectedId, setSelectedId } = useTransStore(
    state => ({
      selectedId: state.selectedId,
      setSelectedId: state.setSelectedId,
    }),
    shallow
  );

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
      <List
        className="list-content"
        data-testid="list-content"
        bordered
        dataSource={transactions}
        renderItem={transaction => (
          <List.Item data-testid="item">
            <Checkbox onChange={(e: CheckboxChangeEvent) => setSelectedId(transaction.id)} />
            <span className="item-amount">{transaction.amount}</span>
            <span className="item-tag">
              {transaction.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </span>
            <NavLink to={`/transactions/trans-edit/${transaction.id}`}>Edit</NavLink>
            <Button type="link" className="item-delete" onClick={deleteTrans(transaction.id)}>
              Delete
            </Button>
          </List.Item>
        )}
      ></List>
    </div>
  );
};
export default TransList;
