var startBtn = document.querySelector(".start-quiz");
var defaultContent = document.querySelector(".default-content");
var quizContent = document.querySelector(".quiz-content");
var question = document.querySelector(".question");
var ansBtn = document.querySelector(".ans-bts");
var btn1


startBtn.addEventListener('click', function () {
    console.log("here");
    defaultContent.textContent = "";
    quizContent.style.display = "block";
    var questions = [
        [
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        [["1. Javascript",false], ["2. terminal/bash",false], ["3. for loops",false], ["4. console.log",true]]
        ],
    ["How do you leave hidden comments in HTML code?", [["1. //",false], ["2. !-",false], ["3. <!-- -->",true], ["4. /!-- --/",false]]]

    ];


    for (var i = 0; i < questions.length; i++) {
        question.textContent = questions[i][0];
        for (var k = 0; k < questions[i][1].length; k++) {
            console.log('questions[i][1].length',questions[i][1].length)
            console.log('k', k)
            btn1 = document.createElement("button");
            btn1.setAttribute("class","ans-btn");
            btn1.setAttribute("correct",questions[i][1][k][1]);
            btn1.textContent = questions[i][1][k][0];
            ansBtn.appendChild(btn1);

        }
        btn1.addEventListener('click',function(){
            var result = btn1.getAttribute("correct");
            console.log(result);

        });
    }

});