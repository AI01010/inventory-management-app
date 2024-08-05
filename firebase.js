// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "inventory-management-app-d4d71.firebaseapp.com",
  projectId: "inventory-management-app-d4d71",
  storageBucket: "inventory-management-app-d4d71.appspot.com",
  messagingSenderId: "442298289967",
  appId: "1:442298289967:web:f67e5bb47229b4c00f5bda",
  measurementId: "G-L6BP7L2711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}