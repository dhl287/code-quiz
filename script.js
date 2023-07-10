var startBtn = document.querySelector("#start-quiz");
var introPage = document.querySelector(".inner-container");
var quizPage = document.querySelector(".quiz-section");
var highScorePage = document.querySelector(highscores-screen);
var initialsEl = document.querySelector();

var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");


var questions = [
  {
    title: "Which item is a string?",
    choices: ["Larry", "14", "true", "None of the Above"],
    answer: "Larry"
  },
  {
    title: "Which item is a boolean?",
    choices: ["14", "Larry", "true", "None of the Above"],
    answer: "true"
  },
  {
    title: "Which file will take me to the HTML code?",
    choices: ["style.css", "script.js", "index.html", "reset.css"],
    answer: "index.html"
  },
  {
    title: "An array is a special variable, which can hold more than one value: True or False?",
    choices: ["true", "false"],
    answer: "true"
  }
]



function startQuiz() {
  firstPage.setAttribute("class", "hide");
  quizPage.setAttribute("class", "show");
  showQuestion();
}

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function(choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = i + 1 + ". " + choice;

    choiceBtn.onclick = questionClick;

    choicesEl.appendChild(choiceBtn);

  })
}

function questionClick () {
  if (this.value !== questions[currentQuestionIndex].answer)
}


