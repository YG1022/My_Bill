import React from 'react';
import "./InputBar.css"

const InputBar = () => {
    const assignAmount = () => {
        const numInput = document.querySelector('.number-input');
        const billAmount = numInput.value;
        numInput.value = '';
        const amountDisplay = document.querySelector('.amount-display');
        amountDisplay.innerHTML = billAmount;
    };

    return (
        <div>
            <label htmlFor='Count'>Tap your count here: </label>
            <input type='number' className='number-input' data-testid='input-content'
                   placeholder='Only number is permitted!' />
            <button onClick={assignAmount}>Assign</button>
            <br />
            <div data-testid='amount-content'>
                The amount of the money is $
                <span className='amount-display' data-testid='amount'>
                    0
                </span>
            </div>
        </div>
    );
};

export default InputBar;
