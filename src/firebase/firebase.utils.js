import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDrLKdy53UE_Sh10G6Q1FxqIb3Ngnn5X_o",
  authDomain: "crwn-clothing-db-f8dc6.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-f8dc6.firebaseio.com",
  projectId: "crwn-clothing-db-f8dc6",
  storageBucket: "",
  messagingSenderId: "219026438682",
  appId: "1:219026438682:web:813ec10d154b10ed326fa3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
