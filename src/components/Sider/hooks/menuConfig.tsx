import { NavLink } from 'react-router-dom';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import { MenuItem } from '../../../constants/types';
import { ROUTES, ROUTES_PATH_NAME } from '../../../constants/routes';

const menus: MenuItem[] = [
  {
    key: ROUTES_PATH_NAME.input,
    label: <NavLink to={ROUTES.input}>Input</NavLink>,
    icon: <DesktopOutlined />,
  },
  {
    key: ROUTES_PATH_NAME.bills,
    label: <NavLink to={ROUTES.bills}>Bills</NavLink>,
    icon: <PieChartOutlined />,
  },
];

export { menus };
