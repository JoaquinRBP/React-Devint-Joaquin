// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: process.env.REACT_APP_SEEDAPIKEY,
authDomain: process.env.REACT_APP_SEEDAUTHDOMAIN,
projectId: process.env.REACT_APP_SEEDPROJECTID,
storageBucket: process.env.REACT_APP_SEEDSTORAGEBUCKET,
messagingSenderId: process.env.REACT_APP_SEEDMESSAGINGSENDERID,
appId: process.env.REACT_APP_SEEDAPPID
};
// const firebaseConfigTesting = {
//     apiKey: "AIzaSyBwpt8ohy3LNHTGZdU0aeYYNSF77hwIpM8",
//     authDomain: "devint-react-test.firebaseapp.com",
//     projectId: "devint-react-test",
//     storageBucket: "devint-react-test.appspot.com",
//     messagingSenderId: "205908261023",
//     appId: "1:205908261023:web:6d9de1faf2fc1e9d9c8aaa"
// };
// if(process.env.NODE_ENV==='test'){
//     //testing
//     firebase.initializeApp(firebaseConfigTesting);
// }else{
    //dev/prod
    firebase.initializeApp(firebaseConfig);
//}


// Initialize Firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
    db,
    googleAuthProvider,
    firebase
}