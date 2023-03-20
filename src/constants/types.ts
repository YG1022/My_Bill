import { MenuProps } from 'antd';
import React from 'react';

type transItem = {
  id: number;
  amount: string;
  date: string;
  category: string;
  tags?: Array<string>;
};

type transListProps = {
  amountList: transItem[];
  category: string;
};

type MenuItem = Required<MenuProps>['items'][number];

interface Props {
  children: React.ReactNode;
}

export { transItem, transListProps, MenuItem, Props };
