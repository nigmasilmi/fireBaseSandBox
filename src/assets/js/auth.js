import {templateCreate} from './../views/templateCreate.js';


export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  // this will return a promise
  firebase.auth().signInWithPopup(provider)
        .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("FUNCIONO");
        console.log("USER COMO VIENE", user);
        user.favoriteBand = "red hot chilli peppers";
        console.log("USER MODIFICADO", user);
        // ...
      }).catch(function(error) {
        console.log("ERROR:", error);
        // Handle Errors here.
        var errorCode = error.code;

        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    console.log("aqui estara auth");
};

export const createAccount = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    console.log(email, password);
};






