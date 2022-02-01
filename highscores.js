var highscoresEl = document.querySelector(".list-of-scores");
var clearBtnEl = document.querySelector(".clear-scores");
var initialsObj = [];
var scoreObj = [];
// console.log(highscoresEl);

if(!(localStorage.getItem("initials") === null)){

    initialsObj = JSON.parse(localStorage.getItem("initials"));
    scoreObj = JSON.parse(localStorage.getItem("score"));
    console.log(typeof(initialsObj));
    for(var i = 0; i < initialsObj.length; i++){
        var scoreEl = document.createElement("p");
        scoreEl.setAttribute("class","scores");
        scoreEl.textContent = (i+1) + ". "+ initialsObj[i]+ " - "+ scoreObj[i];
        console.log(scoreEl);

        highscoresEl.appendChild(scoreEl);

    }
}
else{
    console.log("error");
}

clearBtnEl.addEventListener('click', function() {

    highscoresEl.textContent = "";
    localStorage.removeItem("initials");
    localStorage.removeItem("score");





});