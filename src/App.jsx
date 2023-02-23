import './styles/App.css';
import { Layout, Space } from 'antd';
import InputBar from './components/InputBar';

function App() {
    const { Header, Footer, Content } = Layout;

    return (
        <Space direction='vertical' style={{ width: '100%' }}>
            <Layout>
                <Header>My Bill</Header>
                <Content>
                    <InputBar />
                </Content>
                <Footer>Saving is a virtue.</Footer>
            </Layout>
        </Space>
    );
}

export default App;
