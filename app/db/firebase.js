import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyBk1AKiVx0TDNEX8AS5BfyMgRTSOoIab4E',
    authDomain: 'transactions-cfe59.firebaseapp.com',
    databaseURL: 'https://transactions-cfe59.firebaseio.com',
    projectId: 'transactions-cfe59',
    storageBucket: 'transactions-cfe59.appspot.com',
    messagingSenderId: '886828324949'
};
firebase.initializeApp(config);

export default firebase.firestore();