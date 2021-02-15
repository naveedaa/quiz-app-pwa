  
import firebase from 'firebase';
// import { configFirebase } from './Types/Types';

const config = {
    apiKey: "AIzaSyCNF1nd06NC2jiHoSIebs93qudN56qyykA",
    authDomain: "quiz-app-pwa-2ee0f.firebaseapp.com",
    databaseURL: "https://quiz-app-pwa-2ee0f.firebaseio.com",
    projectId: "quiz-app-pwa-2ee0f",
    storageBucket: "quiz-app-pwa-2ee0f.appspot.com",
    messagingSenderId: "19039955596",
    appId: "1:19039955596:web:d2308c54d35040d730a9a9",
    measurementId: "G-X0C8YDFH40"
};
firebase.initializeApp(config);

export default firebase;