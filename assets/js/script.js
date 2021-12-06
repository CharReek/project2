
let startButton = document.getElementById("start-button")
let questionSection = document.getElementById("question-section")
let questionElement= document.getElementById("question")
let answerButtons =document.getElementById("answer-section")

let shuffleQuestions, currentQuestion

startButton.addEventListener("click" , startGame)

function startGame(){
console.log("start")
startButton.classList.add('hide')
shuffleQuestions = questions.sort(() => Math.random() -.5)
currentQuestion = 0
questionSection.classList.remove('hide')
setQuestion()
}

function setQuestion(){
    resetState()
    showNextQuestion(shuffleQuestions[currentQuestion])
}

function showNextQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener ('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}

function resetState (){
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function selectAnswer(e){
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct){
}


let questions = [
    {
        question: "What does D&G stand for?",
        answers:[
            {text: "Dolce & Gabanna", correct: true},
            {text: "Designer & Garments", correct : false},
            {text: "Dogs & Goats", correct: false},
            {text: "Dave & Gary", correct: false}
        ]
    }
]