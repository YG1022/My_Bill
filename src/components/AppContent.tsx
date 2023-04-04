import { ConfigProvider, Layout } from 'antd'
import MenuSider from './Sider/MenuSider'
import CustomBreadCrumb from './CustomBreadCrumb/CustomBreadCrumb'
import { Outlet } from 'react-router-dom'
import React from 'react'
import { Content, Footer, Header } from 'antd/es/layout/layout'

const AppContent: React.FC = () => {
  const themeConfig = { token: { colorPrimary: '#faad14' } }

  return (<Layout className='app'>
    <ConfigProvider theme={themeConfig}>
      <MenuSider />
      <Layout>
        <Header className='header'>My Bill</Header>
        <Content className='layout-content'>
          <CustomBreadCrumb />
          <div className='main'>
            <Outlet />
          </div>
        </Content>
        <Footer className='site-footer'>Saving is a virtue.</Footer>
      </Layout>
    </ConfigProvider>
  </Layout>)
}

export default AppContent