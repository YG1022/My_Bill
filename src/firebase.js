import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0VKfkzO8Hr3NMfZaR9qX_TkUcRyArQIY",
    authDomain: "my-bill-e40a6.firebaseapp.com",
    projectId: "my-bill-e40a6",
    storageBucket: "my-bill-e40a6.appspot.com",
    messagingSenderId: "812102439517",
    appId: "1:812102439517:web:b997618444581cd86133b4",
    measurementId: "G-CDVLR9R3P5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);