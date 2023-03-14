import { useState } from 'react';
import { menus } from './menuConfig';

const useMenuSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  return { collapsed, setCollapsed, menus };
};

export { useMenuSider };
