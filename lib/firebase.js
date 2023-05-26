import { initializeApp } from "firebase/app";

import { getAuth, signInWithPhoneNumber } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM6LQ9gwwlF6mB-UxFKkVQucmb5pprDcQ",
  authDomain: "wedding-phone-auth.firebaseapp.com",
  projectId: "wedding-phone-auth",
  storageBucket: "wedding-phone-auth.appspot.com",
  messagingSenderId: "439524195232",
  appId: "1:439524195232:web:7a17230ef52276123d42c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
