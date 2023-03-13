import { MenuProps } from 'antd';

type fetchedBillItem = {
  id: number;
  amount: string;
  date: string;
  category: string;
  tags?: string;
};

type billsListProps = {
  amountList: fetchedBillItem[];
  category: string;
};

type MenuItem = Required<MenuProps>['items'][number];

export { fetchedBillItem, billsListProps, MenuItem };
