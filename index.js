import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //yout config code
  apiKey: "AIzaSyCuscSxshALFmKUYSyRlebDLjfz-zX9XWc",
  authDomain: "eventplus-vs1.firebaseapp.com",
  projectId: "eventplus-vs1",
  storageBucket: "eventplus-vs1.appspot.com",
  messagingSenderId: "430767169041",
  appId: "1:430767169041:web:a0b69f970aba05ec295bb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    document.getElementById("anotherhide").style.display="none";
    document.getElementById("logout").style.display="inline";
    window.alert("welcome "+user.email)
    logout.addEventListener('click',(e)=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            alert('user logged out');
            
            document.getElementById("anotherhide").style.display="inline";
            document.getElementById("logout").style.display="none";
            }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorMessage);
        });
    
    });
        
    // window.location="index copy.html"
    //bla bla bla
    // ...
  } else {
    // User is signed out
  }
});

