
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		//User signed in. 

		document.getElementById("appLogin").style.display = "none";
		document.getElementById("appActividades").style.display = "block";

	} else { 
		//No user signed in.

		document.getElementById("appLogin").style.display = "block";
		document.getElementById("appActividades").style.display = "none";
	}
});


/*function validate (input) {
	if($(input).attr('type') == 'correoElectronico' || $(input).attr('contrasena') == 'correoElectronico') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }*/


function login () {

	var correo = document.getElementById("correoElectronico").value;
	var contrasena = document.getElementById("contrasena").value;
	
	/*firebase.auth().createUserWithEmailAndPassword(correo, contrasena).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  window.alert("Error : " errorMessage);
	});*/
}