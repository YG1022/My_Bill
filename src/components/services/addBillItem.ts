import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

export const addBillItem = async (newItem): Promise<void> => {
    try {
        await addDoc(collection(db, 'billItems'), newItem);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};