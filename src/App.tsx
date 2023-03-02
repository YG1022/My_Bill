import './App.scss';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const { Sider, Header, Footer, Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
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

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="search-holder" />
        <Menu theme="dark" defaultSelectedKeys={['input']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-header">My Bill</Header>
        <Content className="site-content">
          <Breadcrumb className="site-breadcrumb">
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="display-content">
            <Outlet />
          </div>
        </Content>
        <Footer className="site-footer">Saving is a virtue.</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
