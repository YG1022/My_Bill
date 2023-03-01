import React, { useEffect, useState } from 'react';
import './AccountBook.scss';
import moment from 'moment';
import { getBillItems } from './services/getBillItems';
import InputBar from '../InputBar/InputBar';
import BillsList from '../BillsList/BillsList';
import { PostgrestError } from '@supabase/supabase-js';

const dateStamp: string = moment().format('YYYY-MM-DD HH:mm:ss');

const AccountBook: React.FC = () => {
    const [error, setError] = useState<PostgrestError>(null);
    const [amountList, setAmountList] = useState([]);

    const fetchData = async () => {
        const { data, error: sqlError } = await getBillItems();

        if (sqlError) {
            setError(sqlError);
            setAmountList([]);
            console.log(error);
        }
        if (data) {
            setAmountList(data);
            setError(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <InputBar />
            <BillsList amountList={amountList} error={error} />
        </>
    );
};

export default AccountBook;
