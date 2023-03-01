import React, { useEffect } from 'react';
import './AccountBook.scss';
import moment from 'moment';
import { useAccountBook } from './hooks/useAccountBook';
import InputBar from '../InputBar/InputBar';
import BillsList from '../BillsList/BillsList';

const dateStamp: string = moment().format('YYYY-MM-DD HH:mm:ss');

const AccountBook: React.FC = () => {
    const { amountList, fetchData } = useAccountBook();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <InputBar />
            <BillsList amountList={amountList} />
        </>
    );
};

export default AccountBook;
