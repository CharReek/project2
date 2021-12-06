
let startButton = document.getElementById("start-button")
let questionSection = document.getElementById("question-section")
startButton.addEventListener("click" , startGame)

function startGame(){
console.log("start")
startButton.classList.add('hide')
questionSection.classList.remove('hide')
}

function setQuestion(){

}

function selectAnswer(){

}