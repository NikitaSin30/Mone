import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
    apiKey            : process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain        : process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId         : process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket     : process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId : process.env.REACT_APP_FIREBASE_MESSAGING_UD,
    appId             : process.env.REACT_APP_FIREBASE_APP_ID,
    databaseURL       : 'https://wallet-accounting-default-rtdb.europe-west1.firebasedatabase.app/',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
