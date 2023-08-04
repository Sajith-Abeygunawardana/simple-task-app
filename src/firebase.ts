import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAy3qbg-OJrzf1FW2fTEYbxcIY6AxHOeNw",
    authDomain: "simple-task-app-9bd5a.firebaseapp.com",
    projectId: "simple-task-app-9bd5a",
    storageBucket: "simple-task-app-9bd5a.appspot.com",
    messagingSenderId: "437965864981",
    appId: "1:437965864981:web:d2b7b019981be7e4954e1c",
    measurementId: "G-B0X6FY68NS"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();