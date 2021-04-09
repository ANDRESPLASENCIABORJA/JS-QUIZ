# JS-QUIZ
The first thing that I did was creating the html document and then linking the css style sheet so I coulb add design to the questionary with css.

Then inside the html element I also linked my script.js to add the code in javascript and make it work.

## HTML header:

1.-Add a div called timer-align-center with the objective of putting inside it a timer that began with 120 seconds and when the quiz began this timer started to dicrease and with every wrong answer that it had it dicrease 10 sec per wrong answer.

2.-Next div is a link so when the user click on it she or he can see their high scores.

## HTML main:
1.-First div "start-game" has a h1 giving the user a welcome to the game, a paragraph describing the instructions of the game and finally a "Start-Quiz" button that has the funcionality (writed in javascript by a addEventlistener function()) of hearing a clich and then prompt all the questions of the quiz.

2.- first-question, second-question, third-question, and four-question divs were created with a question storaged in a h2 element and each one has four buttons with one different answer each one but only one of them is the correct answer.

3.-The final score div was created in a ol to show first in a h3 tag that the user have finished the quiz, in a p tag with an id of score so with js we can store an score counting all the true variables answered, a label and a text area for the userr to enter their initials.

4.- It is important to remark that every button in the question four divs has its own data-boolean teue or false depending the answer so when we call the booleans in javascript by querySelectors we can storage the button answer value.

## CSS 

1.- Here we stablished all the universal elements for the design of our webpage and after that we started to give design attributes to each element of the html document to make all the h1 elements cenered, all the buttons centered, with a blueviolet backgrownd color, rounded corners and white text color, also with a pading left property to center them.

2.- Is also really important to say that owr class question and owr id final score have a display property of hidden in css so we can show them one by one using javascript.

## Javascript
1.- At first i defined all the variables that i am going to use in my code

2.- Second thing was defining an addEventListener function with the objective that when our start-quiz-button hears a click, then it will run all the code written inside our while loop that will be like this:
While our variable index that is equal to 0 is less than or questionsLenght then show our questions.

3.-For our fr loop we are telling app to log our j index that is equal to 0  the numberofAnswers until it hits that variable lenght.

4.-At last with the addEventListener we are telling the answers to show their boolean value with a click on them.

## Live url application link

https://andresplasenciaborja.github.io/JS-QUIZ/
