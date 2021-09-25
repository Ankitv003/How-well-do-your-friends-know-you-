var readlineSync = require ("readline-sync")
var question = readlineSync.question("What is your Name? ")
var answer = readlineSync.question("Hello "+question+ ", Do you know Ankit? ")
console.log("Great!!, lets begin.")
console.log("---------------")
console.log("---------------")
var score = 0

//-----------------------------------------------//


function play(question, answer)

{
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer)
  {
    console.log("You are right!😊👍")
    score++
  }
  else
  {
    console.log("You are wrong!😕😒")
  }
console.log("Current score: "+ score)
console.log("---------------")
console.log("---------------")
}
//-----------------------------------------------//




var questions =[
questionOne = {
  question: "Who is my favorite superhero?",
  answer: "thor"
},

questionTwo = {
  question: "Which is my favorite online multiplayer battle royale game ?",
  answer: "pubg"
},
questionThree ={
  question:"Do i take care about my health and Fitness?",
  answer : "yes"
},
questionFour ={
  question:"Are you having fun playing this game?",
  answer : "yes"
},
questionFive ={
  question:"Do you think i will succeed?",
  answer : "yes"
},
questionSix ={
  question:"Are you a bad person?",
  answer : "yes"
}]
//-----------------------------------------------------//


for(var i=0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer) 
}
var highScores = [
  {
    name: "Rohan",
    score: 5,
  },

  {
    name: "Poonam",
    score: 4,
  },
]
function showScores() {
  console.log("Awesome! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
showScores();