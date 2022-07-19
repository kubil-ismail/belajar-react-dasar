import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCeMPBKBfmstM2CTRw1xB1p2WlRBYxOf7o",
  authDomain: "learn-react-pijar.firebaseapp.com",
  projectId: "learn-react-pijar",
  storageBucket: "learn-react-pijar.appspot.com",
  messagingSenderId: "598970260404",
  appId: "1:598970260404:web:dffbb749834236fdb4f0e1",
  measurementId: "G-0TEMQQ44GH",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, providerGoogle, providerFacebook };
