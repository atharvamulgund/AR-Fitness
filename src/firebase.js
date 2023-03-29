import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import Cookies from "js-cookie";
import {
  setDoc,
  doc,
  serverTimestamp,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ar-fitness3.firebaseapp.com",
  projectId: "ar-fitness3",
  storageBucket: "ar-fitness3.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Google Login
export const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    const accessToken = res.user.accessToken;
    const uid = res.user.uid;

    const profile = {
      name: res.user.displayName,
      email: res.user.email,
      photoUrl: res.user.photoURL,
      userID: res.user.uid,
    };
    // // console.log(profile);
    // const docRef = doc(db, `users/${uid}`);
    // const userData = await setDoc(docRef, profile);
    await addDoc(collection(db, "users"), profile);
    // console.log(userData);
    Cookies.set("uat", accessToken, { expires: 2 });
    localStorage.setItem("uat", accessToken);
    Cookies.set("profile", JSON.stringify(profile), { expires: 2 });
  } catch (err) {
    console.error(err);
  }
};

// Email Login
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    // console.log(res);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
// Register a user
export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user.uid);

    await setDoc(doc(db, "user", user.uid), {
      id: user.uid,
      // name
      // authProvider: "local",
      //  email,
      // password: password,
      // createdAt: serverTimestamp(),
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//   Reset Password
export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//   Logout Fucntion
export const logout = () => {
  signOut(auth);
  localStorage.clear();
};
