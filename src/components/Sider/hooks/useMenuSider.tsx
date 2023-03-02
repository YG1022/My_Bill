import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { MenuItem } from '../../../constants/types';

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink to={'/input'}>Input</NavLink>, 'input', <DesktopOutlined />),
  getItem(<NavLink to={'/bills'}>Bills</NavLink>, 'bills', <PieChartOutlined />),
];

const useMenuSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  return { collapsed, setCollapsed, items };
};

export { useMenuSider };