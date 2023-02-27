import { getDocs, collectionGroup } from 'firebase/firestore';
import { db } from '../../firebase';
import { fetchedBillItem } from '../../constants/types';

export const getBillItems = async (): Promise<fetchedBillItem[]> => {
    try {
        let fetchedList = [];
        const billRef = await getDocs(collectionGroup(db, 'billItems'));
        billRef.docs.forEach(item => fetchedList.push({ ...item.data(), id: item.id }));
        return fetchedList;
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};
