import firebase from 'firebase/compat/app';
import "firebase/database"
import { getDatabase } from 'firebase/database';
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyA23mbXjin0j6l0ktLZGjtlCf8ADHWZypQ",
  authDomain: "realtimedatabase-6ed88.firebaseapp.com",
  projectId: "realtimedatabase-6ed88",
  storageBucket: "realtimedatabase-6ed88.appspot.com",
  messagingSenderId: "761706222536",
  appId: "1:761706222536:web:75efe40f1d915e061866fd",
  measurementId: "G-Q471744YZP"
};
const app=initializeApp(firebaseConfig)
// const fireDB=firebase.initializeApp(firebaseConfig)
const db=getDatabase(app)
export default db