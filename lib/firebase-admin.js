import firebase from "firebase/app";
import admin from "firebase-admin";
import "firebase/auth";
import "firebase/firestore";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cret({
      client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: "https://fast-feedback-acd75.firebaseio.com",
  });
}

export default admin.firestore();
