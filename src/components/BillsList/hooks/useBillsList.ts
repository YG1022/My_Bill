import { fetchedBillItem } from '../../../constants/types';

const useBillsList = (amountList: Array<fetchedBillItem>, category: string) => {
  let totalAmount: number = 0;
  totalAmount = amountList
    .filter(item => item.category === category)
    .reduce((total, curr) => total + Number(curr.amount), 0);

  const transactions: Array<string> = amountList
    .filter(item => item.category === category)
    .map(item => item.amount);

  return { totalAmount, transactions };
};

export { useBillsList };
