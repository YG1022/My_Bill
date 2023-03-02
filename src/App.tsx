import './App.scss';
import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuSider from './components/Sider/MenuSider';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className='main-layout'>
      <MenuSider />
      <Layout className='site-layout'>
        <Header className='site-header'>My Bill</Header>
        <Content className='site-content'>
          <Breadcrumb className='site-breadcrumb'>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className='display-content'>
            <Outlet />
          </div>
        </Content>
        <Footer className='site-footer'>Saving is a virtue.</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
