//console.log ('Hi!');

var startQuizButton = document.getElementById("start-quiz-btn");
var numberOfQuestions = ["first-question","second-question","third-question","fourth-question"];
var questionsLength = numberOfQuestions.length;
var numberOfAnswers = [".answer-one", ".answer-two", ".answer-three", ".answer-four"];


startQuizButton.addEventListener("click", function () {
var i = 0;
while (i < questionsLength) {    
var element = document.getElementById(numberOfQuestions[i]);
element.style.visibility = 'visible';
console.log(numberOfQuestions[i]);
for (var j = 0; j < numberOfAnswers.length; j++) {
    var answer = document.querySelector(numberOfAnswers[j]+"-"+i);
    console.log(answer.textContent);

    answer.addEventListener("click", function(event) {
        var element = event.target;
        var paragraph = document.getElementById("answer-is-" + i);
        console.log(paragraph);

        var correct = element.getAttribute(paragraph);

      
          
          if (correct === "true") {
            
            element.textContent = element.dataset.boolean;

            element.dataset.state = "visible";
         
          } else {
            
            element.textContent = element.dataset.boolean;

            element.dataset.state = "visible";
           
          }  
        
      });

}
i++;
};
});

// i=0 y j=0
// .answer-one-0
// i=0 j=1
// .answer-two-0