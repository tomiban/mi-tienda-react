import * as firebase from "firebase/app";
import "firebase/firestore";


const app = firebase.initializeApp({
    apiKey: "AIzaSyDy-CXHQGwHEzbJ7ow0oYeSvcXeHpze9yE",
    authDomain: "reactbd-879e7.firebaseapp.com",
    projectId: "reactbd-879e7",
    storageBucket: "reactbd-879e7.appspot.com",
    messagingSenderId: "718978824666",
    appId: "1:718978824666:web:769014e1686705ca9ca8e3"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}
