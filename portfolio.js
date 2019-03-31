$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJDsff7C7sXHvJYnKhKVowC6y2uFqhUcc",
    authDomain: "newportfolio-1bc11.firebaseapp.com",
    databaseURL: "https://newportfolio-1bc11.firebaseio.com",
    projectId: "newportfolio-1bc11",
    storageBucket: "newportfolio-1bc11.appspot.com",
    messagingSenderId: "947860398480"
  };
  firebase.initializeApp(config);
  var database = firebase.database().ref("message from portfolio");

  $("#submit").on("click", function(e) {
    e.preventDefault();
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    var newDatabase = database.push();
    newDatabase.set({
        name: name,
        email: email,
        message: message,
    });
    document.getElementById("contact-form").reset();
  });
})