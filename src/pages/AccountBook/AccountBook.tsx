import React, { useEffect } from 'react';
import './AccountBook.scss';
import { useAccountBook } from './hooks/useAccountBook';
import BillsList from '../../components/BillsList/BillsList';
import { Col, Row } from 'antd';

const AccountBook: React.FC = () => {
  const { amountList, fetchData } = useAccountBook();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Row>
        <Col span={12}>
          <BillsList amountList={amountList} category={'+'} />
        </Col>
        <Col span={12}>
          <BillsList amountList={amountList} category={'-'} />
        </Col>
      </Row>
    </>
  );
};

export default AccountBook;
