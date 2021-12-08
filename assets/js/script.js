
let startButton = document.getElementById("start-button")
let questionSection = document.getElementById("question-section")
let questionElement= document.getElementById("question")
let answerButtons =document.getElementById("answer-section")

let currentScore = 0
let questions = [
    {
        question: "What does D&G stand for?",
        choice1:"Designer & Garments",
        choice2:"Dolce & Gabbana",
        choice3:"Dogs & Goats",
        choice4:"Dave & Gary",
        answer:2
    },
    {
        question: "Who is known for the famous red sole?",
        choice1:"Gucci",
        choice2:"Balenciaga",
        choice3:"Christian Loboutin",
        choice4:"Prada",
        answer:3
    },

]
startButton.addEventListener("click" , startGame)
/**
 * starts the game and take it to the set question function
 */
function startGame(){
console.log("start")
startButton.classList.add('hide')
questionSection.classList.remove('hide')
setQuestion()
}

/**
 * starts the next question
 */
function nextQuestion(index){
}

/**
 * check the correct answer against the users answer
 */
function checkAnswer(){
    let usersAnswer = parseInt(document.getElementById(answer-section).innerHTML)
    let correctAnswer = usersAnswer === answer[0]
    if (correctAnswer) {
        alert ("Congrats! you were correct!")
    } else {
        alert (`You answered ${usersAnswer} the correct answer was ${correctAnswer[0]}`)
    }
}

/**
 * increases score by 1 everytime a question is correct 
 */
function score(){
    let oldScore = parseInt(document.getElementById(current-score).innerText)
    document.getElementById(current-score).innerText = ++oldScore
}