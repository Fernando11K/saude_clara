// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCzxafAyO_pof4wn-NtfjAZGkZyPLGRB08',
    authDomain: 'saude-clara.firebaseapp.com',
    databaseURL: 'https://saude-clara-default-rtdb.firebaseio.com',
    projectId: 'saude-clara',
    storageBucket: 'saude-clara.appspot.com',
    messagingSenderId: '713591281835',
    appId: '1:713591281835:web:dadd3a845f7657c003bfee',
    measurementId: 'G-WEQ3MKKJM5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


const dataBase = getDatabase(app)
const exameRef = ref(dataBase, '/exames/')

export { analytics, auth, exameRef, push, onValue }