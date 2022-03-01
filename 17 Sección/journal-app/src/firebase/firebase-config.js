// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBjEVJvVda_9uuKKMUW9_k4dS-FC3Eb6vg",
authDomain: "devint-react.firebaseapp.com",
projectId: "devint-react",
storageBucket: "devint-react.appspot.com",
messagingSenderId: "841551742509",
appId: "1:841551742509:web:2dd3e39028b84c8cf0daa4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
    db,
    googleAuthProvider,
    firebase
}