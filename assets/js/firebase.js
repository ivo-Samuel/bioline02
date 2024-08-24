import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
<<<<<<< HEAD
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"
=======
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import {getStorage} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
>>>>>>> 52daf80f8d846a919cd89c83384adaa837b1677f

const firebaseConfig = {
  apiKey: "AIzaSyCJvukWOuzKvQipmjL85lrwvFPSPQdR4_k",
  authDomain: "corpo-dbc4a.firebaseapp.com",
  databaseURL: "https://corpo-dbc4a-default-rtdb.firebaseio.com",
  projectId: "corpo-dbc4a",
  storageBucket: "corpo-dbc4a.appspot.com",
  messagingSenderId: "719510829494",
  appId: "1:719510829494:web:bdc737c776708afe006917",
  measurementId: "G-DEP549GZNB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
<<<<<<< HEAD
const storage = getStorage(app);
=======
const storage = getStorage(app)
>>>>>>> 52daf80f8d846a919cd89c83384adaa837b1677f

  export {app, auth, database, storage}