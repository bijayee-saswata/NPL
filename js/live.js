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
var matchHeadingRef=firebase.database().ref().child("matchHeading");
matchHeadingRef.on('value',function(datasnapshot){
	matchHeading.innerText=datasnapshot.val();
});

var venue=document.getElementById("venue");
var venueRef=firebase.database().ref().child("venue");
venueRef.on('value',function(datasnapshot){
  venue.innerText=datasnapshot.val();
});

var toss=document.getElementById("toss");
var tossRef=firebase.database().ref().child("toss");
tossRef.on('value',function(datasnapshot){
  toss.innerText=datasnapshot.val();
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

/*------------titel heading--------*/
var objRef=firebase.database().ref().child("batHead");
objRef.on("child_added", snap=>{
 var batsmanHeading=snap.child("batsmanHeading").val();
var RunScored=snap.child("RunScored").val();
var ballPlayed=snap.child("ballPlayed").val();
$("#Bhead").append("<tr><th>"+batsmanHeading+"</th><th>"+RunScored+"</th><th>"+ballPlayed+"</th></tr>");
}); 

/*--------batsman-----------*/
var objRef=firebase.database().ref().child("batsman");

objRef.on("child_added", snap=>{
var name=snap.child("name").val();
var run=snap.child("run").val();
var ball=snap.child("ball").val();
$("#batsmans").append("<tr><td>"+name+"</td><td>"+run+"</td><td>"+ball+"</td></tr>"); 
});

/*---------to change scorecard-------*/
objRef.on("child_changed", snap=>{
var name=snap.child("name").val();
var run=snap.child("run").val();
var ball=snap.child("ball").val();
});

/*---------to remove scorecard---------*/
objRef.on("child_removed", snap=>{
var name=snap.child("name").val();
var run=snap.child("run").val();
var ball=snap.child("ball").val();
name.remove();
run.remove();
ball.remove();
});

/*------------titel heading--------*/
var objRef=firebase.database().ref().child("bowlHead");
objRef.on("child_added", snap=>{
 var bowlerHeading=snap.child("bowlerHeading").val();
var overBowled=snap.child("overBowled").val();
var wicketTaken=snap.child("wicketTaken").val();
$("#Bohead").append("<tr><th>"+bowlerHeading+"</th><th>"+overBowled+"</th><th>"+wicketTaken+"</th></tr>");
}); 

/*---------bowler1---------*/
var objRef=firebase.database().ref().child("bowler");

objRef.on("child_added", snap=>{
var name=snap.child("name").val();
var over=snap.child("over").val();
var wicket=snap.child("wicket").val();
$("#bowlers").append("<tr><td>"+name+"</td><td>"+over+"</td><td>"+wicket+"</td></tr>"); 
});

/*---------to change bowler scorecard-------*/
objRef.on("child_changed", snap=>{
var name=snap.child("name").val();
var over=snap.child("over").val();
var wicket=snap.child("wicket").val();
});

/*---------to remove bowler scorecard---------*/
objRef.on("child_removed", snap=>{
var name=snap.child("name").val();
var over=snap.child("over").val();
var wicket=snap.child("wicket").val();
name.remove();
over.remove();
wicket.remove();
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
 
var refreshRef=firebase.database().ref().child("refresh");
refreshRef.on('value',function(datasnapshot){
$("#refresh").append("<button>Refresh</button>");
});

/*------team 2-------*/

var batTeam2=document.getElementById("batTeam2");
var batTeam2Ref=firebase.database().ref().child("batTeam2");
batTeam2Ref.on('value',function(datasnapshot){
  batTeam2.innerText=datasnapshot.val();
});

var bowTeam2=document.getElementById("bowTeam2");
var bowTeam2Ref=firebase.database().ref().child("bowTeam2");
bowTeam2Ref.on('value',function(datasnapshot){
  bowTeam2.innerText=datasnapshot.val();
});
