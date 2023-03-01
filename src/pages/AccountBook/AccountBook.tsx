import React, { useEffect } from 'react';
import './AccountBook.scss';
import { useAccountBook } from './hooks/useAccountBook';
import InputBar from '../../components/InputBar/InputBar';
import BillsList from '../../components/BillsList/BillsList';

const AccountBook: React.FC = () => {
  const { amountList, fetchData } = useAccountBook();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <InputBar />
      <BillsList amountList={amountList} />
    </>
  );
};

export default AccountBook;
