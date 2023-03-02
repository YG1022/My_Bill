import { Layout, Menu } from 'antd';
import React from 'react';
import { useMenuSider } from './hooks/useMenuSider';

const MenuSider: React.FC = () => {
  const { Sider } = Layout;
  const { collapsed, setCollapsed, items } = useMenuSider();

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
      <div className='search-holder' />
      <Menu theme='dark' defaultSelectedKeys={['input']} mode='inline' items={items} />
    </Sider>
  );
};

export default MenuSider;