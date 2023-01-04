import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDOXDBezJMpdUzVaVKowkwas7L_iFhIpPA",
    authDomain: "sneaktreatweb.firebaseapp.com",
    projectId: "sneaktreatweb",
    storageBucket: "sneaktreatweb.appspot.com",
    messagingSenderId: "864878275815",
    appId: "1:864878275815:web:192d9ce9e4ce205607c642"
  };
  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();
  export default db;