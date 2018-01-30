// Initialize Firebase
var config = {
    apiKey: "AIzaSyCTOoLBrH2mKLPv-YGYQ-MfkaJZQFnHJHw",
    authDomain: "mi-fabuloso-proyecto-892e8.firebaseapp.com",
    databaseURL: "https://mi-fabuloso-proyecto-892e8.firebaseio.com",
    projectId: "mi-fabuloso-proyecto-892e8",
    storageBucket: "",
    messagingSenderId: "1052783818660"
  };
  firebase.initializeApp(config);

  $('#button-google').click(function () {
    authGoogle();
  })

  function authGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
  }

  function authentication(provider) {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(result);     
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log(error);
      
      var errorCode = error.code;
      console.log(errorCode);
      
      var errorMessage = error.message;
      // The email of the user's account used.
      console.log(errorMessage);
      
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      console.log(email);
      
      var credential = error.credential;
      // ...
      console.log(credential);
      
    });
  }