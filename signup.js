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



signup.addEventListener('click',(e) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var repassword = document.getElementById('repassword').value;
  var Fullname = document.getElementById('txtf').value;
  var phoneNo = document.getElementById('txtp').value;
  
  var isCreatingUser=true;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    // Signed in 
    const user = userCredential.user;
    // const user = auth.currentUser;
    if (user!==null) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      set(ref(database, 'users/' + user.uid),{
        username: Fullname,
        email: email,
        phoneNo:phoneNo,
      }).then(()=>{
        window.alert('Account created successfully!');
        var isCreatingUser=false;
        window.location="dashboard.html";
      }).catch((e)=>{
        var isCreatingUser=false;
        throw e;
      })
    
    }
  })
      //bla bla bla
      // ...
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    var isCreatingUser=false;
    window.alert(errorMessage);
  // ..
  });

  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
  if (user && !isCreatingUser) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    window.location="dashboard.html"
    console.log("welcome"+user.username)
    //bla bla bla
    // ...
  } else {
    // User is signed out
    // ...
    //bla bla bla
  }
  });
});