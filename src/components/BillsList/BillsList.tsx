import { Divider, List } from 'antd';
import React from 'react';
import { billsListProps } from '../../constants/types';
import { useBillsList } from './hooks/useBillsList';
import './BillsList.scss';

const BillsList: React.FC<billsListProps> = ({ amountList, category }) => {
  const { bills, sumBill } = useBillsList(amountList, category);

  return (
    <div className="bills-list">
      <Divider className="bills-divider" orientation="left">
        Bills List
      </Divider>
      <div className="amount-content">
        <span>The amount of all the bills is $</span>
        <span className="amount" data-testid="amount">
          {sumBill}
        </span>
      </div>
      <List
        className="list-content"
        bordered
        dataSource={bills}
        renderItem={bill => <List.Item>{bill}</List.Item>}
      ></List>
    </div>
  );
};
export default BillsList;
