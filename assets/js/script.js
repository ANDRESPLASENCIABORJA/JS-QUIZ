//console.log ('Hi!');

var startQuizButton = document.getElementById("start-quiz-btn");
var numberOfQuestions = ["first-question","second-question","third-question","fourth-question"];
var questionsLength = numberOfQuestions.length;

startQuizButton.addEventListener("click", function () {
for (var i = 0; i < questionsLength; i++);    
//var element = document.getElementById(numberOfQuestions[i])
//element.style.visibility = 'visible';
console.log(numberOfQuestions[i])
});



