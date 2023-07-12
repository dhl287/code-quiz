var showQuestion = [
  document.getElementById("question-box").style.display = "none"];

var timerEl = document.getElementById("timer");
    
var secondsLeft = 60;

function start() {
    document.getElementById("guide").hidden = true;
    document.getElementById("start-btn").hidden = true;
    showQuestion = [document.getElementById("question-box").style.display = "block"];
    
  
 }


 // start();



 // var startBtn = document.getElementById("start-btn");
  
  // startBtn.addEventListener("click", function() {
    // var timerInterval = setInterval(function () {
      // secondsLeft--;
      // timerEl.textContent = secondsLeft + " seconds left";
      // showQuestion = [document.getElementById("question-box").style.display = "block"];
  
     // if(secondsLeft === 0) {
      //  clearInterval(timerInterval);
        //sendMessage();
     // }
    //}, 1000);
  //});
  
  ////function sendMessage() {
    // timerEl.textContent = "Game Over";
  
  //}
  
  //setTime();


  
  // List of Questions
  var Questions = [{
    question: "Which item is a string?",
    answer: [
      { text: "Larry", isCorrect: true },
    { text: "true", isCorrect: false },
    { text: "None of the Above", isCorrect: false }
    ]
  
  },
  {
    question: "Which item is a boolean?",
    answer: [
      { text: "14", isCorrect: false },
    { text: "true", isCorrect: true },
    { text: "None of the Above", isCorrect: false }
    ]
  
  },
  {
    question: "An array is a special variable, which can hold more than one value: True or False?",
    answer: [
      { text: "True", isCorrect: true },
    { text: "False", isCorrect: false },
    { text: "None of the Above", isCorrect: false }
    ]
  
  }

  ]
  
  var currentQuestion = 0
  var score = 0
  
  function nextQuestion() {
    var question = document.getElementById("question")
    var options = document.getElementById("options")
  
    question.textContent = Questions[currentQuestion].question;
    options.innerHTML = ""
  
    for (let i = 0; i < Questions[currentQuestion].answer.length; i++) {
      var choicesdiv = document.createElement("div");
      var choice = document.createElement("input");
      var choiceLabel = document.createElement("label");
  
      choice.type = "radio";
      choice.name = "answer";
      choice.value = i;
  
      choiceLabel.textContent = Questions[currentQuestion].answer[i].text;
  
      choicesdiv.appendChild(choice);
      choicesdiv.appendChild(choiceLabel);
      options.appendChild(choicesdiv);
    }
  }
  
  nextQuestion();
  
  function newQuestion() {
    if (currentQuestion < Questions.length - 1) {
      currentQuestion++;
      nextQuestion();
    } else {
      document.getElementById("options").remove()
      document.getElementById("question").remove()
      document.getElementById("submit-btn").remove()
      showScore();
    }
  }

var initials = [
  document.getElementById("initials").style.display = "none"
];

  function showScore() {
    var totalScore = document.getElementById("last-page")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
    initials = [document.getElementById("initials").style.display = "block"]
  }

  
  function checkAnswer() {
    var selectedAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);
  
    if (Questions[currentQuestion].answer[selectedAnswer].isCorrect) {
      score++;
      console.log("Correct")
      newQuestion();
    } else {
      // add function to deduct 10 seconds
      newQuestion();
    }
  }
