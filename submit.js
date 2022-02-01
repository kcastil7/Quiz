var scoreTimer = document.querySelector(".timer");
var userFormEl = document.querySelector(".highscore");
var nameInputEl = document.querySelector(".form-control");

var queryString = document.location.search;
var score = queryString.split('=')[1];
scoreTimer.textContent = "Score: " + score;
var initialsObj = [];
var scoreObj = [];


userFormEl.addEventListener('submit', function(event){
    event.preventDefault();
    var initials = nameInputEl.value.trim();
    // var storedNames = JSON.parse(localStorage.getItem("names"));

    if(!(localStorage.getItem("initials") === null)){
        initialsObj = JSON.parse(localStorage.getItem("initials"));
        scoreObj = JSON.parse(localStorage.getItem("score"));
        console.log(typeof(initialsObj));
        initialsObj.push(initials);
        scoreObj.push(score);
    }
    else{
        console.log(typeof(initialsObj));
        initialsObj.push(initials);
        scoreObj.push(score);
    }



    // localStorage.setItem("names", JSON.stringify(names));
    localStorage.setItem("initials", JSON.stringify(initialsObj));
    localStorage.setItem("score", JSON.stringify(scoreObj));
    location.href = "highscores.html";

});