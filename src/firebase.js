import firebase from "firebase";
 
const firebaseApp = firebase.initializeApp({
 
 
 apiKey: "AIzaSyBtnQH3DUUIX89xKFiRELJDWr8evUKIgys",
 authDomain: "facebook-messenger-clone-eb41d.firebaseapp.com",
 databaseURL: "https://facebook-messenger-clone-eb41d.firebaseio.com",
 projectId: "facebook-messenger-clone-eb41d",
 storageBucket: "facebook-messenger-clone-eb41d.appspot.com",
 messagingSenderId: "1086089595505",
 appId: "1:1086089595505:web:13afe0acd55c603c2429d0",
 measurementId: "G-7TP0L3WXRQ"

});

const db = firebaseApp.firestore();

export default db;