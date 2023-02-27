import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import './AccountBook.scss';
import moment from 'moment';
import { addBillItem } from './services/addBillItem';
import { getBillItems } from './services/getBillItems';
import { fetchedBillItem } from '../constants/types';

const dateStamp: string = moment().format('YYYY-MM-DD HH:mm:ss');

const AccountBook = (): JSX.Element => {
    const [amount, setAmount] = useState<string>('');
    const [amountList, setAmountList] = useState<fetchedBillItem[]>([]);

    const inputRef: React.MutableRefObject<HTMLInputElement> = useRef();

    const fetchData = async (): Promise<void> => setAmountList(await getBillItems());

    const assignAmount = (): void => setAmount(inputRef.current.value);

    const addBill = async (): Promise<void> => {
        const newBillItem = { amount, date: dateStamp };

        await addBillItem(newBillItem);
        await fetchData();

        inputRef.current.value = '';
    };

    const sumBill: number = amountList.reduce((total, curr) => total + Number(curr.amount), 0);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Row>
                <Col span={12}>
                    <div className="input-content">
                        <label htmlFor="Amount">Tap your amount here: </label>
                        <br />
                        <input
                            type="number"
                            className="number-input"
                            data-testid="input-bar"
                            placeholder="Only number is permitted!"
                            onChange={assignAmount}
                            ref={inputRef}
                        />
                        <button onClick={addBill}>Assign</button>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="amount-content" data-testid="amount-content">
                        <span>The amount of all the bills is $</span>
                        <span className="amount-display" data-testid="amount">
                            {sumBill}
                        </span>
                        <ul>
                            {amountList.reverse().map(perAmount => (
                                <li key={perAmount.id}>
                                    <div className="bill-tag">${perAmount.amount || 0}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default AccountBook;
