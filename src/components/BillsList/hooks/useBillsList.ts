import { fetchedBillItem } from '../../../constants/types';

const useBillsList = (amountList: Array<fetchedBillItem>) => {
    let sumBill: number;
    if (amountList.length > 0) {
        sumBill = amountList.reduce((total, curr) => total + Number(curr.amount), 0);
    } else {
        sumBill = 0;
    }

    const bills: Array<string> = amountList.map(item => item.amount);

    return { sumBill, bills };
};

export { useBillsList };