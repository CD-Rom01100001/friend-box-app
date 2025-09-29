import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkv9cIioQv8kJgbZlVS5kCYCXii_zY7RE",
  authDomain: "friend-box-161f5.firebaseapp.com",
  projectId: "friend-box-161f5",
  storageBucket: "friend-box-161f5.firebasestorage.app",
  messagingSenderId: "436390638697",
  appId: "1:436390638697:web:931f499d06af92601adef8"
};

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});