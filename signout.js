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
 

auth.onAuthStateChanged(function (user){
  if (user){
      var email = user.email;
      var user = document.getElementById("user");
      var text = document.createTextNode(email);
      user.appendChild(text);
      console.log(user);

      //is signed in
  } else {
      alert("user not authenticated, kindly login or signup");
      window.location = "index.html";
  }
});

//logout function

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("logout clicked");
  auth.signOut();
  alert("Signed out");
  window.location = "./index.html";
})