import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

export const addBillItem = async (newItem): Promise<void> => {
    try {
        const billRef = await addDoc(collection(db, 'billItems'), newItem);
        console.log('Document written with ID: ', billRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};