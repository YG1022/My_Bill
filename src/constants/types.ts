import { MenuProps } from 'antd';
import React from 'react';

type fetchedBillItem = {
  id: number;
  amount: string;
  date: string;
  category: string;
  tags?: Array<string>;
};

type billsListProps = {
  amountList: fetchedBillItem[];
  category: string;
};

type MenuItem = Required<MenuProps>['items'][number];

interface Props {
  children: React.ReactNode;
}

export { fetchedBillItem, billsListProps, MenuItem, Props };
