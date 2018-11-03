// Initialize Firebase
var config = {
  apiKey: "AIzaSyAU8lvzdRC5QA_CzCaB2NdpSs8kWAOWRyQ",
  authDomain: "muachile-81afe.firebaseapp.com",
  databaseURL: "https://muachile-81afe.firebaseio.com",
  projectId: "muachile-81afe",
  storageBucket: "muachile-81afe.appspot.com",
  messagingSenderId: "157612617310"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log( user.email );
    //User signed in.
    document.getElementById("appLogin").style.display = "none";
    document.getElementById("appActividades").style.display = "block";
  } else {
    //No user signed in.
    document.getElementById("appLogin").style.display = "block";
    document.getElementById("appActividades").style.display = "none";
  }
});

function login () {
  var correo = document.getElementById("correoElectronico").value;
  var contrasena = document.getElementById("contrasena").value;

  // Ya estan creados los Usuarios (via la Consola de Firebase)
  // Docuementacion: https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
  firebase.auth().signInWithEmailAndPassword(correo, contrasena).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}
