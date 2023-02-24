import React from 'react';
import { Row, Col } from 'antd';
import './InputBar.scss';

const InputBar = (): JSX.Element => {
    const assignAmount = () => {
        const numInput = document.querySelector('.number-input') as HTMLInputElement;
        const billAmount = numInput.value ? numInput.value : '0';
        numInput.value = '';
        const amountDisplay = document.querySelector('.amount-display') as HTMLElement;
        amountDisplay.innerHTML = billAmount;
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
                    />
                    <button onClick={assignAmount}>Assign</button>
                    <br />
                    <div data-testid="amount-content">
                        The amount of the money is $
                        <span className="amount-display" data-testid="amount">
                            0
                        </span>
                    </div>
                </div>
            </Col>
            <Col span={12}>Bill</Col>
        </Row>
    );
};

export default InputBar;
