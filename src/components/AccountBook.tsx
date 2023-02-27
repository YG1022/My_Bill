import React, { useState } from 'react';
import { Row, Col } from 'antd';
import './AccountBook.scss';
import moment from 'moment';

type billItem = {
    amount: string;
    date: string;
};

const dateStamp: string = moment().format('YYYY-MM-DD HH:mm:ss');

const AccountBook = (): JSX.Element => {
    const [amount, setAmount] = useState<string>('');
    const [amountList, setAmountList] = useState<billItem[]>([]);

    const inputRef: React.MutableRefObject<HTMLInputElement> = useRef();

    const assignAmount = (): void => setAmount(inputRef.current.value);

    const displayAmount = async (): Promise<void> => {
        const newBillItem = { amount, date: dateStamp };
        setAmountList(preList => [...preList, newBillItem]);

        const EmptyList = amountList.filter((item) => item.amount === '0');
        if (EmptyList.length > 0) {
            console.log('The empty bill is not allowed!');
        }
    };

    const allBillsAmount: number = amountList.reduce((total, curr) => total + Number(curr.amount), 0);

    return (
        <>
            <Row>
                <Col span={12}>
                    <div className='input-content'>
                        <label htmlFor='Amount'>Tap your amount here: </label>
                        <br />
                        <input
                            type='number'
                            className='number-input'
                            data-testid='input-bar'
                            placeholder='Only number is permitted!'
                            onChange={assignAmount}
                            ref={inputRef}
                        />
                        <button onClick={displayAmount}>Assign</button>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='amount-content' data-testid='amount-content'>
                        <span>The amount of all the bills is $</span>
                        <span className='amount-display' data-testid='amount'>
                            {allBillsAmount}
                        </span>
                        <ul>
                            {amountList.reverse().map(perAmount => (
                                <li>
                                    <div className='bill-tag'>${perAmount.amount || 0}</div>
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
