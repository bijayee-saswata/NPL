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


var batsman1=document.getElementById("batsman1");
var batsman1Ref=firebase.database().ref().child("batsman1");
batsman1Ref.on('value',function(datasnapshot){
batsman1.innerText=datasnapshot.val();
});

var batsman1B=document.getElementById("batsman1B");
var batsman1BRef=firebase.database().ref().child("batsman1B");
batsman1BRef.on('value',function(datasnapshot){
batsman1B.innerText=datasnapshot.val();
});

var batsman1R=document.getElementById("batsman1R");
var batsman1RRef=firebase.database().ref().child("batsman1R");
batsman1RRef.on('value',function(datasnapshot){
batsman1R.innerText=datasnapshot.val();
});


/*--------batsman2-----------*/


var batsman2=document.getElementById("batsman2");
var batsman2Ref=firebase.database().ref().child("batsman2");
batsman2Ref.on('value',function(datasnapshot){
batsman2.innerText=datasnapshot.val();
});

var batsman2B=document.getElementById("batsman2B");
var batsman2BRef=firebase.database().ref().child("batsman2B");
batsman2BRef.on('value',function(datasnapshot){
batsman2B.innerText=datasnapshot.val();
});

var batsman2R=document.getElementById("batsman2R");
var batsman2RRef=firebase.database().ref().child("batsman2R");
batsman2RRef.on('value',function(datasnapshot){
batsman2R.innerText=datasnapshot.val();
});

/*---------bowler1---------*/

var bowler1=document.getElementById("bowler1");
var bowler1Ref=firebase.database().ref().child("bowler1");
bowler1Ref.on('value',function(datasnapshot){
bowler1.innerText=datasnapshot.val();
});

var bowler1O=document.getElementById("bowler1O");
var bowler1ORef=firebase.database().ref().child("bowler1O");
bowler1ORef.on('value',function(datasnapshot){
bowler1O.innerText=datasnapshot.val();
});

var bowler1W=document.getElementById("bowler1W");
var bowler1WRef=firebase.database().ref().child("bowler1W");
bowler1WRef.on('value',function(datasnapshot){
bowler1W.innerText=datasnapshot.val();
});

/*-------------recent balls---------*/
const recent_ball=document.getElementById("recent_ball");
const recent_ballRef=firebase.database().ref().child("recent_ball");
const ulList=document.getElementById("list");
const listRef=recent_ballRef.child('ball');

listRef.on("child_added", function (datasnapshot) {
  const li=document.creatElement("li");
  li.innerText=datasnapshot.val();
  li.id=datasnapshot.key;
  ulList.appendChild(li); 
});

listRef.on("child_changed" function (datasnapshot) {
  const liChanged=document.getElementById(datasnapshot.key);
liChanged.innerText=datasnapshot.val();});

listRef.on("child_removed" function (datasnapshot) {
   const liToRemove=document.getElementById(datasnapshot.key);

liToRemove.remove();});