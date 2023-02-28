import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import './AccountBook.scss';
import moment from 'moment';
import { addBillItem } from './services/addBillItem';
import { getBillItems } from './services/getBillItems';
import { fetchedBillItem } from '../../constants/types';

const dateStamp: string = moment().format('YYYY-MM-DD HH:mm:ss');

const AccountBook = (): JSX.Element => {
  let sumBill: number;

  const [error, setError] = useState(null);
  const [amountList, setAmountList] = useState<fetchedBillItem[]>(null);

  const inputRef: React.MutableRefObject<HTMLInputElement> = useRef();

  const fetchData = async (): Promise<void> => await getBillItems(error, setError, setAmountList);

  const addBill = async (): Promise<void> => {
    const newBillItem = { amount: inputRef.current.value, date: dateStamp };

    await addBillItem(newBillItem);
    await fetchData();

    inputRef.current.value = '';
  };

  if (amountList) {
    sumBill = amountList.reduce((total, curr) => total + Number(curr.amount), 0);
  } else {
    sumBill = 0;
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Row>
        <Col span={12}>
          <div>
            <label htmlFor="Amount">Tap your amount here: </label>
            <br />
            <input
              type="number"
              data-testid="input-bar"
              placeholder="Only number is permitted!"
              ref={inputRef}
            />
            <button onClick={addBill}>Assign</button>
          </div>
        </Col>
        <Col span={12}>
          <div data-testid="amount-content">
            <span>The amount of all the bills is $</span>
            <span className="amount" data-testid="amount">
              {sumBill}
            </span>
            <ul>
              {error && <p>{error}</p>}
              {amountList &&
                amountList.reverse().map(perAmount => (
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