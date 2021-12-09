 
let startButton = document.getElementById("start-button")
let questionSection = document.getElementById("question-section")
let questionElement= document.getElementById("question")
let answerButtons =document.getElementById("answer-section")

let currentScore = 0
let index=0
maxQuestions = 10 
let questions = [
    {
        question:"What does D&G stand for?",
        choice1:"Designer & Garments",
        choice2:"Dolce & Gabbana",
        choice3:"Dogs & Goats",
        choice4:"Dave & Gary",
        answer:2
    },
    {
        question:"Who is known for the famous red sole?",
        choice1:"Gucci",
        choice2:"Balenciaga",
        choice3:"Christian Loboutin",
        choice4:"Prada",
        answer:3
    },
    {
        question:"Who made the LBD famous?",
        choice1:"Dior",
        choice2:"Prada",
        choice3:"Givencey",
        choice4:"Coco Chanel",
        answer:4
    },
    {
        question:"What year did Alexander McQueen release the oversized sneaker?",
        choice1:"2014",
        choice2:"2018",
        choice3:"2010",
        choice4:"2019",
        answer:1
    },
    {
        question:"Where was the brand Ganni founded?",
        choice1:"Berlin",
        choice2:"Amsterdam",
        choice3:"Madrid",
        choice4:"Copenhagen",
        answer:4
    },
    {
        question:"What year was dior founded?",
        choice1:"1942",
        choice2:"1946",
        choice3:"1950",
        choice4:"1952",
        answer:2
    },
    {
        question:"Which of these brands was founded in england?",
        choice1:"Burberry",
        choice2:"Valentino",
        choice3:"Louis Vuitton",
        choice4:"Nina Ricci",
        answer:1
    },
    {
        question:"Whis Ciy is considers the fashion capital of the world in 2021?",
        choice1:"Milan",
        choice2:"New York",
        choice3:"London",
        choice4:"Paris",
        answer:2
    },
    {
        question:"Who designed the iconic green dress Jlo wore at the 42nd Grammy Awards?",
        choice1:"Armani",
        choice2:"Balmain",
        choice3:"Moschino",
        choice4:"Versace",
        answer:4
    },
    {
        question:"Who is known for making chunky trainers popular again?",
        choice1:"Fendi",
        choice2:"Celine",
        choice3:"Balenciaga",
        choice4:"Yves Saint Laurent",
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

let currentQuestion

/**
 * starts the question
 */

function setQuestion(){
    document.getElementById("question").innerHTML = questions[0];
    document.getElementById("choice1").innerHTML= "h";
    document.getElementById("choice2").innerHTML= "e"
    document.getElementById("choice3").innerHTML= "3"
    document.getElementById("choice4").innerHTML= "2"
}

/**
 * check the correct answer against the users answer
 */
function checkAnswer(){
    let usersAnswer = parseInt(document.getElementById(answer-section).innerHTML)
    let correctAnswer = usersAnswer === questions.answer[i]
}

/**
 * increases score by 1 everytime a question is correct 
 */
function score(){
    let oldScore = parseInt(document.getElementById(current-score).innerText)
    document.getElementById(current-score).innerText = ++oldScore
}