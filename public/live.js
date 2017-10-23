(function() {

 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAYk2ZRUUmoLVYBNmwFpZ_t5oHGGozFLHY",
    authDomain: "naaopl-fc3e2.firebaseapp.com",
    databaseURL: "https://naaopl-fc3e2.firebaseio.com",
    projectId: "naaopl-fc3e2",
    storageBucket: "naaopl-fc3e2.appspot.com",
    messagingSenderId: "984552710496"
  };
  firebase.initializeApp(config);



}());

var matchHeading=document.getElementById("matchHeading");
var matchHeadingRef=firebase.database().ref().child("Heading");
matchHeadingRef.on('value',function(datasnapshot){
	matchHeading.innerText=datasnapshot.val();
});