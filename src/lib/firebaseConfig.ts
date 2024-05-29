import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5nPCvuvicSkKVVUvsemqNv0H_9JYVCKQ",
  authDomain: "my-app-4f854.firebaseapp.com",
  projectId: "my-app-4f854",
  storageBucket: "my-app-4f854.appspot.com",
  messagingSenderId: "446430860891",
  appId: "1:446430860891:web:443c16abd8aa108c33d17e",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { db, app, auth };
