import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBa2u_GtGNlB1pEwYc05KxrPR0HQsbf_SU",
  authDomain: "crwn-db-21f8d.firebaseapp.com",
  databaseURL: "https://crwn-db-21f8d.firebaseio.com",
  projectId: "crwn-db-21f8d",
  storageBucket: "crwn-db-21f8d.appspot.com",
  messagingSenderId: "533904869566",
  appId: "1:533904869566:web:258bab43f32fed5e8b76ef"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({pompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
