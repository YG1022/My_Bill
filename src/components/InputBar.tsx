import React, { useState } from 'react';
import { Row, Col } from 'antd';
import './InputBar.scss';

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
        <Row>
            <Col span={12}>
                <div>
                    <label htmlFor="Count">Tap your count here: </label>
                    <input
                        type="number"
                        className="number-input"
                        data-testid="input-content"
                        placeholder="Only number is permitted!"
                        onChange={assignAmount}
                    />
                    <button onClick={displayAmount}>Assign</button>
                    <br />
                    <div data-testid="amount-content">
                        The amount of the money is $
                        <span className="amount-display" data-testid="amount">
                            {amountList[0] ? amountList[0] : 0}
                        </span>
                    </div>
                </div>
            </Col>
            <Col span={12}>Bill</Col>
        </Row>
    );
};

export default InputBar;
