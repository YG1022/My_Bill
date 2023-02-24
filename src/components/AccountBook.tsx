import React, { useState } from 'react';
import { Row, Col } from 'antd';
import './AccountBook.scss';
import moment from 'moment';

type billItem = {
    amount: string;
    date: string;
};

const AccountBook = (): JSX.Element => {
    const [amount, setAmount] = useState<string>('');
    const [amountList, setAmountList] = useState<billItem[]>([]);

    const assignAmount = (event): void => {
        setAmount(event.target.value);
    };

    const displayAmount = (): void =>
        setAmountList((preList) => [...preList, { amount, date: moment().format('YYYY-MM-DD HH:mm:ss') }]);

    return (
        <>
            <Row>
                <Col span={12}>
                    <div className='input-content'>
                        <label htmlFor='Amount'>Tap your amount here: </label>
                        <input
                            type='number'
                            className='number-input'
                            data-testid='input-bar'
                            placeholder='Only number is permitted!'
                            onChange={assignAmount}
                        />
                        <button onClick={displayAmount}>Assign</button>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='amount-content' data-testid='amount-content'>
                        <span>The amount of the money is $</span>
                        <span className='amount-display' data-testid='amount'>
                            {amountList[amountList.length - 1]?.amount ? amountList[amountList.length - 1]?.amount : 0}
                        </span>
                        <ul>
                            {amountList.reverse().map((perAmount) => (
                                <li key={perAmount.date}>${perAmount.amount || 0}</li>))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default AccountBook;
