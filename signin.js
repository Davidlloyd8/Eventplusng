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

login.addEventListener('click',(e)=>{
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const dt = new Date();
        update(ref(database, 'users/' + user.uid),{
          last_login: dt,
        })

        window.alert('User logged in!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        window.alert(errorMessage);
  });

});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    window.location="index.html"
    //bla bla bla
    // ...
  } else {
    // User is signed out
  }
});

