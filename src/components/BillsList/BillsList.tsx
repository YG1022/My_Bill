import { Divider, List } from 'antd';
import React from 'react';
import { fetchedBillItem } from '../../constants/types';

interface billsListProps {
  amountList: fetchedBillItem[];
  error: any;
}

const BillsList: React.FC<billsListProps> = ({ amountList, error }) => {
  let sumBill: number;
  if (amountList) {
    sumBill = amountList.reduce((total, curr) => total + Number(curr.amount), 0);
  } else {
    sumBill = 0;
  }

  const bills = amountList.map(item => item.amount);

  return (
    <div style={{ height: 60 }}>
      <Divider orientation="left">Bills List</Divider>
      <span>The amount of all the bills is $</span>
      <span className="amount" data-testid="amount">
        {sumBill}
      </span>
      <List bordered dataSource={bills} renderItem={bill => <List.Item>{bill}</List.Item>}></List>
    </div>
  );
};
export default BillsList;
