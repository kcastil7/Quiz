var startBtn = document.querySelector(".start-quiz");
var defaultContent = document.querySelector(".default-content");
var quizContent = document.querySelector(".quiz-content");
var question = document.querySelector(".question");
var ansBtnEl = document.querySelector(".ans-bts");
var ansBtn = document.querySelector(".ans-btn");
var btn
var quesCounter = 0;


startBtn.addEventListener('click', function () {
    console.log("eventlistener activated");
    defaultContent.textContent = "";
    quizContent.style.display = "block";

    var questions = [
        //first index of objects
        {
            ques: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answer: [
                { ansText: "1. Javascript", isCorrect: false },
                { ansText: "2. terminal/bash", isCorrect: false },
                { ansText: "3. for loops", isCorrect: false },
                { ansText: "4. console.log", isCorrect: true }
            ]
        },
        //second index of objects
        {
            ques: "How do you leave hidden comments in HTML code?",
            answer: [
                { ansText: "1. //", isCorrect: false },
                { ansText: "2. !-", isCorrect: false },
                { ansText: "3. <!-- -->", isCorrect: true },
                { ansText: "4. /!-- --/", isCorrect: false }
            ]
        }
    ];

    displayQuestion();

    function displayQuestion() {
        ansBtnEl.textContent = "";
        question.textContent = questions[quesCounter].ques;
        for (var i = 0; i < 4; i++) {
            btn = document.createElement("button");
            btn.setAttribute("class", "ans-btn");
            btn.setAttribute("is-correct", questions[quesCounter].answer[i].isCorrect);
            console.log(questions[quesCounter].answer[i].isCorrect);
            btn.textContent = questions[quesCounter].answer[i].ansText;
            ansBtnEl.appendChild(btn);
        }
    }

    ansBtnEl.addEventListener('click', function (event){ 
        var ansSubmit = event.target;
        console.log (ansSubmit.getAttribute("is-correct"));
        


    });


});