import { Divider, List } from 'antd';
import React from 'react';
import { billsListProps } from '../../constants/types';
import { useBillsList } from './hooks/useBillsList';

const BillsList: React.FC<billsListProps> = ({ amountList }) => {
    const { bills, sumBill } = useBillsList(amountList);

    return (
        <div style={{ maxHeight: 500 }}>
            <Divider orientation='left' style={{ height: 50 }}>
                Bills List
            </Divider>
            <span>The amount of all the bills is $</span>
            <span className='amount' data-testid='amount'>
        {sumBill}
      </span>
            <List
                bordered
                dataSource={bills}
                renderItem={bill => <List.Item>{bill}</List.Item>}
                style={{ maxHeight: 400 }}
            ></List>
        </div>
    );
};
export default BillsList;
