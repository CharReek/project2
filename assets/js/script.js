// vars for the quiz
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionSection = document.getElementById("question-section");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-section");

// vars for the questions

let currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

//quiz function 

function startGame(){
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    questionSection.classList.remove("hide");
}