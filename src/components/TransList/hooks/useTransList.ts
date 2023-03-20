import { transItem } from '../../../constants/types';

const useTransList = (amountList: Array<transItem>, category: string) => {
  let totalAmount: number = 0;
  totalAmount = amountList
    .filter(item => item.category === category)
    .reduce((total, curr) => total + Number(curr.amount), 0);

  const transactions: Array<transItem> = amountList
    .filter(item => item.category === category);

  return { totalAmount, transactions };
};

export { useTransList };
