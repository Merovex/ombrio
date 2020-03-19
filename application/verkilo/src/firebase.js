import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCMReaN4IgyoBpfutv_51BBwS16OKaRvas",
  authDomain: "verkilo-app.firebaseapp.com",
  databaseURL: "https://verkilo-app.firebaseio.com",
  projectId: "verkilo-app",
  storageBucket: "verkilo-app.appspot.com",
  messagingSenderId: "996700250031",
  appId: "1:996700250031:web:7e7f0a488945423dfc195a",
  measurementId: "G-621XSKKE77"
})
export {firebaseConfig as firebase};
