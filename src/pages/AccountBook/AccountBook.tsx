import React from 'react';
import './AccountBook.scss';
import { useAccountBook } from './hooks/useAccountBook';
import TransList from '../../components/TransList/TransList';
import { Col, Row } from 'antd';
import { PageContainer } from '../../components/PageContainer/PageContainer';

const AccountBook: React.FC = () => {
  const { amountList } = useAccountBook();

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={12}>
          <TransList amountList={amountList} category={'+'} />
        </Col>
        <Col span={12}>
          <TransList amountList={amountList} category={'-'} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default AccountBook;
