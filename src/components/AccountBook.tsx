import React, { useState } from 'react';
import { Row, Col } from 'antd';
import './AccountBook.scss';

const InputBar = (): JSX.Element => {
    const [amount, setAmount] = useState<string>('');
    const [amountList, setAmountList] = useState<string[]>([]);

    const assignAmount = (event): void => {
        setAmount(event.target.value);
    };

    const displayAmount = (): void => {
        setAmountList([amount]);
    };

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
                    <div data-testid='amount-content'>
                        <span>The amount of the money is $</span>
                        <span className='amount-display' data-testid='amount'>
                            {amountList[0] ? amountList[0] : 0}
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default AccountBook;
