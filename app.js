  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_PgIFBjQLYiSo5l80loVsbtIgH93Wy64",
    authDomain: "regal-homes.firebaseapp.com",
    projectId: "regal-homes",
    storageBucket: "regal-homes.appspot.com",
    messagingSenderId: "731839041326",
    appId: "1:731839041326:web:e2dd3ad671722ef6bc74bf"
  };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();

//signup function
let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) =>{
   // prevent default form submission behaviour
   e.preventDefault();
   console.log("clicked");

   var email = document.getElementById("inputEmail");
   var password = document.getElementById("inputPassword");

   auth
   .createUserWithEmailAndPassword(email.value, password.value)
   .then((userCredential) => {
       location.reload();
       alert("Sign up successful");

       //signed in
       var user = userCredential.user;
       console.log("user, user.email");
       window.location = "signin.html";

   })

   .catch((error)=>{
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log("error code", errorCode);
       console.log("error Message", error);
       alert(errorMessage);
   });
});

//Sign in Function
let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) =>{
   e.preventDefault();
   console.log("sign in clicked");

   var email = document.getElementById("inputEmail");
   var password = document.getElementById("inputPassword");

   auth
   .signInWithEmailAndPassword(email.value, password.value)
   .then((userCredential) => {
       var user = userCredential.user;
       console.log("user", user.email);
       window.location = "home.html";
       alert("Logged In successful");
   })

   .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       alert(errorMessage);
   });
});