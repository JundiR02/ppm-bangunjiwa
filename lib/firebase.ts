import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

// Public web config — access is enforced by firestore.rules, not by hiding these values.
const firebaseConfig = {
  apiKey: "AIzaSyDDz4sqyKgkhJPNhI4HXzLTcdze7N4wCY8",
  authDomain: "ppm-riset-ekologi-bangunjiwa.firebaseapp.com",
  projectId: "ppm-riset-ekologi-bangunjiwa",
  storageBucket: "ppm-riset-ekologi-bangunjiwa.firebasestorage.app",
  messagingSenderId: "847530100069",
  appId: "1:847530100069:web:7cd9dd677e8a21faadcd8c",
};

function app(): FirebaseApp {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export function db(): Firestore {
  return getFirestore(app());
}

export function auth(): Auth {
  return getAuth(app());
}
