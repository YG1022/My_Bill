import './App.scss';
import { Layout, Space } from 'antd';
import InputBar from './components/InputBar';
import React from 'react';

const App = (): JSX.Element => {
    const { Header, Footer, Content } = Layout;

    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Layout>
                <Header>My Bill</Header>
                <Content>
                    <InputBar />
                </Content>
                <Footer>Saving is a virtue.</Footer>
            </Layout>
        </Space>
    );
};

export default App;
