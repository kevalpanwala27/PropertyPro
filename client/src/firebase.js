import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertypro-60ce8.firebaseapp.com",
  projectId: "propertypro-60ce8",
  storageBucket: "propertypro-60ce8.appspot.com",
  messagingSenderId: "190212923711",
  appId: "1:190212923711:web:c54455f807c2a54735338a",
};

export const app = initializeApp(firebaseConfig);
