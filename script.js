// var uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh = poggers;
// // LOOK AT ACTIVITY 18-STU_BOOTSTRAP-EXTEND FOR HOMEWORK AND 06-STU_FORM-ELEMENTS AND 09-INS_EVENT-DELEGATION
// var formEl = $('#start-form');


// when I click the start button, display: none on <main> and display the next question
// Display the next question and the four options
// If I select the correct option, display "Correct!"
// else display "Wrong!"
// AND display: none on that question and move to the next question
// Calvin's HW demo instructions


// Add scores to your total score!

var add = (function () {
  var counter = 0;
  return function () { counter += 1; return counter; }


})();

function myFunction() {
  document.getElementById("myScore").innerHTML = "Correct answers: " + add();
  if ($('#returnBtn').click()) {
    counter = 0;
  }
}

var questionTitleEl = document.getElementById('question-title');
var questionEl = document.getElementById('question-choices');
var startBtn = document.getElementById('start-button');
var startPoint = document.getElementById('start-point');



var questions = [
  {
    title: 'What is 1 + 1?',
    buttonChoices: [1, 2, 3, 4],
    answer: 2
  },
  {
    title: 'Which of these is a primitive data type?',
    buttonChoices: ['data', 'function', 'object', 'boolean'],
    answer: 'boolean'
  },
];



let questionIndex = 0;

function startQuiz() {
  // Hide intro
  // hide start button
  startPoint.style.display = 'none';

  // Generate a question
  generateQuestion();

}


function generateQuestion() {

  var currentQuestion = questions[questionIndex]

  questionTitleEl.textContent = currentQuestion.title;
  questionTitleEl.textContent = questions[questionIndex].title;

  document.getElementById('question-choices').innerHTML = "";

  for (var i = 0; i <= 3; i++) {

    var tempButton = document.createElement('button');

    tempButton.setAttribute('value', currentQuestion.buttonChoices[i])
    tempButton.textContent = currentQuestion.buttonChoices[i];

    tempButton.onclick = validateAnswer;

    questionEl.appendChild(tempButton);
  };
};

function validateAnswer() {
  // check if answer is correct

  if (this.value === questions[questionIndex].answer) {
    // score goes up

    questionIndex++;
    // generate new question
    generateQuestion();
  } else {
    // timer go down

    questionIndex++;
    generateQuestion();
  }
}






// $(".first-question").hide();
// $('.second-question').hide();
// $('.third-question').hide();
// $('.fourth-question').hide();
// $('.fifth-question').hide();
// $('.sixth-question').hide();
// $('.seventh-question').hide();
// $('.eighth-question').hide();
// $('.ninth-question').hide();
// $('.tenth-question').hide();
// $('.eleventh-question').hide();
// $(".leaderboard").hide();

// // Cycling through questions

// $(document).ready(function () {

//   $("#startPoint").click(function () {

//     $(".first-question").show();
//     $(".start-page").hide();

//   });

//   $("#first-hide").click(function () {

//     $(".first-question").hide();
//     $(".second-question").show();

//   });

//   $("#second-hide").click(function () {

//     $(".second-question").hide();
//     $(".third-question").show();

//   });

//   $("#third-hide").click(function () {

//     $(".third-question").hide();
//     $(".fourth-question").show();

//   });

//   $("#fourth-hide").click(function () {

//     $(".fourth-question").hide();
//     $(".fifth-question").show();

//   });

//   $("#fifth-hide").click(function () {

//     $(".fifth-question").hide();
//     $(".sixth-question").show();

//   });

//   $("#sixth-hide").click(function () {

//     $(".sixth-question").hide();
//     $(".seventh-question").show();

//   });

//   $("#seventh-hide").click(function () {

//     $(".seventh-question").hide();
//     $(".eighth-question").show();

//   });

//   $("#eighth-hide").click(function () {

//     $(".eighth-question").hide();
//     $(".ninth-question").show();

//   });

//   $("#ninth-hide").click(function () {

//     $(".ninth-question").hide();
//     $(".tenth-question").show();

//   });


//   $("#tenth-hide").click(function () {

//     $(".tenth-question").hide();
//     $(".eleventh-question").show();

//   });

//   $("#eleventh-hide").click(function () {

//     $(".eleventh-question").hide();
//     $(".myScore").hide();
//     $(".leaderboard").show();

//   });


//   // Return button 

//   $("#returnBtn").on("click", function () {

//     $(".first-question").hide();
//     $('.second-question').hide();
//     $('.third-question').hide();
//     $('.fourth-question').hide();
//     $('.fifth-question').hide();
//     $('.sixth-question').hide();
//     $('.seventh-question').hide();
//     $('.eighth-question').hide();
//     $('.ninth-question').hide();
//     $('.tenth-question').hide();
//     $('.eleventh-question').hide();
//     $(".leaderboard").hide();
//     $("#startPoint").show();

//   });

//   // Leaderboard stuff goes here


//   $("#leaderboardInt").on("click", function () {

//     $(".first-question").hide();
//     $('.second-question').hide();
//     $('.third-question').hide();
//     $('.fourth-question').hide();
//     $('.fifth-question').hide();
//     $('.sixth-question').hide();
//     $('.seventh-question').hide();
//     $('.eighth-question').hide();
//     $('.ninth-question').hide();
//     $('.tenth-question').hide();
//     $('.eleventh-question').hide();
//     $("#startPoint").hide();
//     $(".leaderboard").show();

//   });


// });

// // myInitials and myHiscore to be linked from HTML
// // myAttempt at leaderboard
// // Local Storage shenanigans go here

// var initialsSpan = document.querySelector("#myInitials");
// var hiscoreSpan = document.querySelector("#myHiscore");
// var signUpButton = document.querySelector("#eleventh-hide");


// function renderLastRegistered() {
//   var initials = localStorage.getItem("initials");
//   var hiscore = localStorage.getItem("hiscore");

//   if (!initials || !hiscore) {
//     return;
//   }

//   initialsSpan.textContent = initials;
//   hiscoreSpan.textContent = hiscore;
// }

// signUpButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   var initials = document.querySelector("#myInitials").value;
//   var hiscore = document.querySelector("#myHiscore").value;

//   localStorage.setItem("initial", initials);
//   localStorage.setItem("hiscore", hiscore);
//   renderLastRegistered();

// });