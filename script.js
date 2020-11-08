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
  return function () {counter += 1; return counter;}
 

})();

function myFunction(){
  document.getElementById("myScore").innerHTML = "Correct answers: " + add();
  if ($('#returnBtn').click()) {
    counter = 0;
  }
} 

$(".first-question").hide();
$('.second-question').hide();
$('.third-question').hide();
$('.fourth-question').hide();
$('.fifth-question').hide();
$('.sixth-question').hide();
$('.seventh-question').hide();
$('.eighth-question').hide();
$('.ninth-question').hide();
$('.tenth-question').hide();
$('.eleventh-question').hide();
$(".leaderboard").hide();

// Cycling through questions

$(document).ready(function(){

  $("#home-hide").click(function(){

    $(".first-question").show();
    $(".start-page").hide();

  });

});

$(document).ready(function(){

  $("#first-hide").click(function(){

    $(".first-question").hide();
    $(".second-question").show();

  });

});

$(document).ready(function(){

  $("#second-hide").click(function(){

    $(".second-question").hide();
    $(".third-question").show();

  });

});

$(document).ready(function(){

  $("#third-hide").click(function(){

    $(".third-question").hide();
    $(".fourth-question").show();

  });

});

$(document).ready(function(){

  $("#fourth-hide").click(function(){

    $(".fourth-question").hide();
    $(".fifth-question").show();

  });

});

$(document).ready(function(){

  $("#fifth-hide").click(function(){

    $(".fifth-question").hide();
    $(".sixth-question").show();

  });

});

$(document).ready(function(){

  $("#sixth-hide").click(function(){

    $(".sixth-question").hide();
    $(".seventh-question").show();

  });

});

$(document).ready(function(){

  $("#seventh-hide").click(function(){

    $(".seventh-question").hide();
    $(".eighth-question").show();

  });

});

$(document).ready(function(){

  $("#eighth-hide").click(function(){

    $(".eighth-question").hide();
    $(".ninth-question").show();

  });

});

$(document).ready(function(){

  $("#ninth-hide").click(function(){

    $(".ninth-question").hide();
    $(".tenth-question").show();

  });

});

$(document).ready(function(){

  $("#tenth-hide").click(function(){

    $(".tenth-question").hide();
    $(".eleventh-question").show();

  });

});

$(document).ready(function(){

  $("#eleventh-hide").click(function(){

    $(".eleventh-question").hide();
    $(".myScore").hide();
    $(".leaderboard").show();

  });

});

// Return button 

$(document).ready(function(){

  $("#returnBtn").on("click", function(){    

    $(".first-question").hide();
    $('.second-question').hide();
    $('.third-question').hide();
    $('.fourth-question').hide();
    $('.fifth-question').hide();
    $('.sixth-question').hide();
    $('.seventh-question').hide();
    $('.eighth-question').hide();
    $('.ninth-question').hide();
    $('.tenth-question').hide();
    $('.eleventh-question').hide();
    $(".leaderboard").hide();
    $("#startPoint").show();

  });
});

// Leaderboard stuff goes here

$(document).ready(function(){

  $("#leaderboardInt").on("click", function(){
    
    $(".first-question").hide();
    $('.second-question').hide();
    $('.third-question').hide();
    $('.fourth-question').hide();
    $('.fifth-question').hide();
    $('.sixth-question').hide();
    $('.seventh-question').hide();
    $('.eighth-question').hide();
    $('.ninth-question').hide();
    $('.tenth-question').hide();
    $('.eleventh-question').hide();
    $("#startPoint").hide();
    $(".leaderboard").show();

  });
});

// myInitials and myHiscore to be linked from HTML
// myAttempt at leaderboard
// Local Storage shenanigans go here

var initialsSpan = document.querySelector("#myInitials");
var hiscoreSpan = document.querySelector("#myHiscore");
var signUpButton = document.querySelector("#eleventh-hide");


function renderLastRegistered() {
  var initials = localStorage.getItem("initials");
  var hiscore = localStorage.getItem("hiscore");

  if (!initials || !hiscore) {
    return;
  }

  initialsSpan.textContent = initials;
  hiscoreSpan.textContent = hiscore;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var initials = document.querySelector("#myInitials").value;
  var hiscore = document.querySelector("#myHiscore").value;

    localStorage.setItem("initial", initials);
    localStorage.setItem("hiscore", hiscore);
    renderLastRegistered();
  
});