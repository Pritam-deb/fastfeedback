import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC3fFjQuFVK4MAN9XKOBoKpmMOW_Qao8C8",
    authDomain: "fast-feedback-acd75.firebaseapp.com",
    projectId: "fast-feedback-acd75",
  });
}

export default firebase;
