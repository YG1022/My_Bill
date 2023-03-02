import './App.scss';
import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuSider from './components/Sider/MenuSider';
import CustomBreadCrumb from './components/CustomBreadCrumb/CustomBreadCrumb';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className='main-layout'>
      <MenuSider />
      <Layout className='site-layout'>
        <Header className='site-header'>My Bill</Header>
        <Content className='site-content'>
          <CustomBreadCrumb />
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
