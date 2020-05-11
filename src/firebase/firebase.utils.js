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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
    }catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({pompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
