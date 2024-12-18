import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhMqdreKanvdut-ndy64LfOoRFLtL5eZ8",
  authDomain: "tienda-ropa-js.firebaseapp.com",
  projectId: "tienda-ropa-js",
  storageBucket: "tienda-ropa-js.appspot.com",
  messagingSenderId: "353483600931",
  appId: "1:353483600931:web:62065a20c661bf57de2d96",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
