import { MenuProps } from "antd";
import React from "react";

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

type MenuItem = Required<MenuProps>["items"][number];

type Props = {
  children: React.ReactNode;
};

type user = {
  accountname: string;
  password: string;
  confirmpassword: string;
};

type fetchUser = {
  id: number;
  created_at: string;
  account_name: string;
  password: string;
  uuid: string;
};

type profile = {
  email: string;
  realname: string;
  gender: string;
  prefix: string;
  phonenumber: string;
  birthday: string;
};

export { transItem, transListProps, MenuItem, Props, user, fetchUser, profile };
