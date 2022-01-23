import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getDatabase, set, ref, update, onValue } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //yout config code
  apiKey: "AIzaSyCuscSxshALFmKUYSyRlebDLjfz-zX9XWc",
  authDomain: "eventplus-vs1.firebaseapp.com",
  databaseURL: "https://eventplus-vs1-default-rtdb.firebaseio.com",
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
    document.getElementById('loading').style.display="flex";
    const id=user.uid;
    // document.getElementById("anotherhide").style.display="none";
    // document.getElementById("logout").style.display="inline";
    const username= ref(database, 'users/' + id + '/username');
    
    onValue(username, (snapshot) => {
        var data = snapshot.val();
        // window.alert('Welcome Back ... '+data);
        document.getElementById("welcome").innerHTML='WELCOME, '+data;
        document.getElementById('signin').style.display="none";
        document.getElementById('logout').style.display="flex";
        document.getElementById('loading').style.display="none";
        document.getElementById('wrapper').style.display="block";
    });
    //bla bla bla
    // ...
    logout.addEventListener('click',(e)=>{

        signOut(auth).then(() => {
            // Sign-out successful.
            onValue(username, (snapshot) => {
                var data = snapshot.val();
                document.getElementById('logout').style.display="none";
                document.getElementById('signin').style.display="flex";
                alert('Goodbye ... '+data);
            });
            // document.getElementById("anotherhide").style.display="inline";
            // document.getElementById("logout").style.display="none";
            window.location="index.html"
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorMessage);
        });
    });
  } else {
    // User is signed out
    // ...
    //bla bla bla
  }
});