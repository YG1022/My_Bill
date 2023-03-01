type billItem = {
    amount: string;
    date: string;
};

type fetchedBillItem = {
    id: number;
    amount: string;
    date: string;
};

type billsListProps = {
    amountList: fetchedBillItem[];
    error: any;
}

export { billItem, fetchedBillItem, billsListProps };
