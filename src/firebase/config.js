import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxzBALkjlgAK-IfztAom46Uw_Kb5FpoJ4",
    authDomain: "disney-clone-9f2d0.firebaseapp.com",
    projectId: "disney-clone-9f2d0",
    storageBucket: "disney-clone-9f2d0.appspot.com",
    messagingSenderId: "664900335849",
    appId: "1:664900335849:web:438e20fc4dbbf9efc09878",
    measurementId: "G-6PHZJLPQHJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
