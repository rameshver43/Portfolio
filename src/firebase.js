// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/firestore";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
	doc,
	setDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBOmXeZSCJjpvtKi9iRzMsZDIdGm8gYEVs",
	authDomain: "portfolio-288d8.firebaseapp.com",
	projectId: "portfolio-288d8",
	storageBucket: "portfolio-288d8.appspot.com",
	messagingSenderId: "482159323378",
	appId: "1:482159323378:web:3459ee4e7b03eec5d1486b",
	measurementId: "G-BDJZRTPWHW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {
	db,
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	collection,
	getDocs,
	addDoc,
	query,
	where,
	doc,
	setDoc,
};
