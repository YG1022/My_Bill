import { NavLink } from 'react-router-dom';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import { MenuItem } from '../../../constants/types';

const menus: MenuItem[] = [
  {
    key: 'input',
    label: <NavLink to={'/input'}>Input</NavLink>,
    icon: <DesktopOutlined />,
  },
  {
    key: 'bills',
    label: <NavLink to={'/bills'}>Bills</NavLink>,
    icon: <PieChartOutlined />,
  },
];

export { menus };