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

var batsman=document.getElementById("batsman");
var batsmanRef=firebase.database().ref().child("batsman");
batsmanRef.on('value',function(datasnapshot){
  batsman.innerText=datasnapshot.val();
}); 

var batTeam=document.getElementById("batTeam");
var batTeamRef=firebase.database().ref().child("batTeam");
batTeamRef.on('value',function(datasnapshot){
	batTeam.innerText=datasnapshot.val();
});

var bowTeam=document.getElementById("bowTeam");
var bowTeamRef=firebase.database().ref().child("bowTeam");
bowTeamRef.on('value',function(datasnapshot){
	bowTeam.innerText=datasnapshot.val();
});

var score=document.getElementById("score");
var scoreRef=firebase.database().ref().child("score");
scoreRef.on('value',function(datasnapshot){
	score.innerText=datasnapshot.val();
});

/*--------batsman1-----------*/
var objRef=firebase.database().ref().child("batsman");

objRef.on("child_added", snap=>{
var name=snap.child("name").val();
var run=snap.child("run").val();
var ball=snap.child("ball").val();
$("#batsmans").append("<tr><td>"+name+"</td><td>"+run+"</td><td>"+ball+"</td></tr>"); 
});



/*---------bowler1---------*/
var objRef=firebase.database().ref().child("bowler");

objRef.on("child_added", snap=>{
var name=snap.child("name").val();
var over=snap.child("over").val();
var wicket=snap.child("wicket").val();
$("#bowlers").append("<tr><td>"+name+"</td><td>"+over+"</td><td>"+wicket+"</td></tr>"); 
});


/*-------------recent balls---------*/
var rootRef=firebase.database().ref().child("recent_ball");

/*---------new ball-------*/
rootRef.on("child_added", snap=>{
var data=snap.child("data").val();
$("#balls").append("<li>"+data+"</li>"); 
});

/*---------to change value-----*/
rootRef.on("child_changed", snap=>{
var data=snap.child("data").val();
});

/*---------to remove---------*/
rootRef.on("child_removed", snap=>{
var data=snap.child("data").val();
data.remove();
});

