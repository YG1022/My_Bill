import './App.scss';
import { Layout } from 'antd';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MenuSider from './components/Sider/MenuSider';
import CustomBreadCrumb from './components/CustomBreadCrumb/CustomBreadCrumb';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Layout className="app">
      <MenuSider />
      <Layout>
        <Header className="header">My Bill</Header>
        <Content className="layout-content">
          <CustomBreadCrumb />
          <div className="main">
            {location.pathname === '/' && <h1>Welcome to My Bill!</h1>}
            <Outlet />
          </div>
        </Content>
        <Footer className="site-footer">Saving is a virtue.</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
