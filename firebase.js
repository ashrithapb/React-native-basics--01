import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7etqgluo8Hj5lBldeYzlleWqqW417kzo",
  authDomain: "react-native-basics-34592.firebaseapp.com",
  projectId: "react-native-basics-34592",
  storageBucket: "react-native-basics-34592.appspot.com",
  messagingSenderId: "436833277732",
  appId: "1:436833277732:web:990aa0291347e8eed085b1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
