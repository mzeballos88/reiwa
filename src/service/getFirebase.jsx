import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAprLiWsOeLXpX5ThPPJbScNZ3mDulLe0w",
    authDomain: "reiwaizakaya-f7b2b.firebaseapp.com",
    projectId: "reiwaizakaya-f7b2b",
    storageBucket: "reiwaizakaya-f7b2b.appspot.com",
    messagingSenderId: "570915490632",
    appId: "1:570915490632:web:bcb6f4581fb2953cad817d"
  };
  
  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore(){
      return firebase.firestore(app)
  }