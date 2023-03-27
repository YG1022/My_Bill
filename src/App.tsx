import './App.scss';
import { ConfigProvider, Layout } from 'antd';
import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import MenuSider from './components/Sider/MenuSider';
import CustomBreadCrumb from './components/CustomBreadCrumb/CustomBreadCrumb';
import { useAccountBook } from './pages/AccountBook/hooks/useAccountBook';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  const themeConfig = { token: { colorPrimary: '#faad14' } };
  const { amountList, fetchData } = useAccountBook();
  const { current: transDeps } = useRef(amountList);

  useEffect(() => {
    fetchData();
  }, [transDeps]);

  return (
    <Layout className="app">
      <ConfigProvider theme={themeConfig}>
        <MenuSider />
        <Layout>
          <Header className="header">My Bill</Header>
          <Content className="layout-content">
            <CustomBreadCrumb />
            <div className="main">
              <Outlet />
            </div>
          </Content>
          <Footer className="site-footer">Saving is a virtue.</Footer>
        </Layout>
      </ConfigProvider>
    </Layout>
  );
};

export default App;
