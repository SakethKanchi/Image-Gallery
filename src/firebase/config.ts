import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyxy9GTWdCxmiW9dY-IrXVS69_7dB-NLE",
  authDomain: "image-gallery-54559.firebaseapp.com",
  projectId: "image-gallery-54559",
  storageBucket: "image-gallery-54559.appspot.com",
  messagingSenderId: "147032275945",
  appId: "1:147032275945:web:db986858c0d62aaa7b6978"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


export { auth, storage, db };