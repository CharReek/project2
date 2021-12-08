
let startButton = document.getElementById("start-button")
let questionSection = document.getElementById("question-section")
let questionElement= document.getElementById("question")
let answerButtons =document.getElementById("answer-section")

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
    
}

function showNextQuestion(question){
}

function resetState (){
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
    clearStatusClass(element)
    if (correct){
        elemenent.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearStatusClass(element){
    elemenent.classList.remove('correct')
    element.classList.remove('incorrect')
}


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