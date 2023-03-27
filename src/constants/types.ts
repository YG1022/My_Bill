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

type Props = {
  children: React.ReactNode;
}

type user = {
  accountname: string;
  password: string;
  confirmpassword: string;
}

type profile = {
  email: string;
  prefix: string;
  phonenumber: string;
  introduction: string;
  gender: string;
}

export { transItem, transListProps, MenuItem, Props, user, profile };
