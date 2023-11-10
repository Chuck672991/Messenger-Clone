import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCeGIgMpQX6r9FQS9sNMVYNe0F1yQGGWvE",
    authDomain: "messenger-clone-2805c.firebaseapp.com",
    projectId: "messenger-clone-2805c",
    storageBucket: "messenger-clone-2805c.appspot.com",
    messagingSenderId: "296240257040",
    appId: "1:296240257040:web:c23189d29397e3328ed295",
    measurementId: "G-C00E25X34Q"
});

const db = firebaseApp.firestore();

  export {db}