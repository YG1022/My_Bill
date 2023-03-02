import { MenuProps } from 'antd';

type billItem = {
  amount: string;
  date: string;
};

type fetchedBillItem = {
  id: number;
  amount: string;
  date: string;
};

type billsListProps = {
  amountList: fetchedBillItem[];
};

type MenuItem = Required<MenuProps>['items'][number];

export { billItem, fetchedBillItem, billsListProps, MenuItem };
