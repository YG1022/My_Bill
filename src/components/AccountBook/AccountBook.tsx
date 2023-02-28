import React, { useEffect, useRef, useState } from 'react';
import './AccountBook.scss';
import moment from 'moment';
import { getBillItems } from './services/getBillItems';
import { fetchedBillItem } from '../../constants/types';
import InputBar from '../InputBar/InputBar';
import BillsList from '../BillsList/BillsList';

const dateStamp: string = moment().format('YYYY-MM-DD HH:mm:ss');

const AccountBook: React.FC = () => {
  const [error, setError] = useState(null);
  const [amountList, setAmountList] = useState<fetchedBillItem[]>([]);

  const fetchData = async (): Promise<void> => await getBillItems(error, setError, setAmountList);

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <InputBar />
      <BillsList amountList={amountList} error={error} />
    </>
  );
};

export default AccountBook;
