import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJvukWOuzKvQipmjL85lrwvFPSPQdR4_k",
  authDomain: "corpo-dbc4a.firebaseapp.com",
  projectId: "corpo-dbc4a",
  storageBucket: "corpo-dbc4a.appspot.com",
  messagingSenderId: "719510829494",
  appId: "1:719510829494:web:bdc737c776708afe006917",
  measurementId: "G-DEP549GZNB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

  export {app, auth}