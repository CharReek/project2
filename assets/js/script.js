// vars for the quiz
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionSection = document.getElementById("question-section");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-section");

index=0 

// vars for the questions

let shuffeledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

//quiz function 

function startGame(){
    startButton.classList.add("hide");
    shuffeledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionSection.classList.remove("hide");
    setNextQuestion
}

function setNextQuestion(){
    resetGame();
    showQuestions(shuffeledQuestions [currentQuestionIndex]);
}

function showQuestions(question){
    questionText.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.correct;
        button.classList.add("btn");
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetGame(){
    nextButton.classList.add("hide");
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedAnswer = e.target;
    const correct = selectAnswer.dataset.correct;
    array.from(answerButtons.children).forEach(button => { 
        setStatus (button, button.dataset.correct);
    });
    if (shuffeledQuestions.lenght > currentQuestionIndex +1){
        nextButton.classList.remove("hide")
    } else {
        alert("congrats! You finished the quiz!")
    }
}

function setStatus (element, correct){
    clearStatus(element);
    if (correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatus (element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "What does D&G stand For?",
        answers:[
            {text:"Dolce & Gabbana", correct: true},
            {text:"Designer & Garments", correct: false},
            {text:"Dog & Goose", correct: false},
            {text:"Dave & Gary", correct: false}
        ]
    },
    {
        question: "Who is known for the famous red sole?",
        answers:[
            {text:"Balenciaga", correct: false},
            {text:"Gucci", correct: false},
            {text:"Christian Loboutin", correct: true},
            {text:"Prada", correct: false}
        ]
    },
    {
        question: "Who designed the iconic Jlo Green dress she wore to the 42nd Grammys in 2000?",
        answers:[
            {text:"Moschino", correct: true},
            {text:"Valentino", correct: false},
            {text:"Dior", correct: false},
            {text:"Versace", correct: true}
        ]
    },
    {
        question: "What does D&G stand For?",
        answers:[
            {text:"Dolce & Gabbana", correct: true},
            {text:"Designer & Garments", correct: false},
            {text:"Dog & Goose", correct: false},
            {text:"Dave & Gary", correct: false}
        ]
    },
    {
        question: "What does D&G stand For?",
        answers:[
            {text:"Dolce & Gabbana", correct: true},
            {text:"Designer & Garments", correct: false},
            {text:"Dog & Goose", correct: false},
            {text:"Dave & Gary", correct: false}
        ]
    },
    {
        question: "What does D&G stand For?",
        answers:[
            {text:"Dolce & Gabbana", correct: true},
            {text:"Designer & Garments", correct: false},
            {text:"Dog & Goose", correct: false},
            {text:"Dave & Gary", correct: false}
        ]
    },
    {
        question: "What does D&G stand For?",
        answers:[
            {text:"Dolce & Gabbana", correct: true},
            {text:"Designer & Garments", correct: false},
            {text:"Dog & Goose", correct: false},
            {text:"Dave & Gary", correct: false}
        ]
    },
    {
        question: "What does D&G stand For?",
        answers:[
            {text:"Dolce & Gabbana", correct: true},
            {text:"Designer & Garments", correct: false},
            {text:"Dog & Goose", correct: false},
            {text:"Dave & Gary", correct: false}
        ]
    },
    {
        question: "What does D&G stand For?",
        answers:[
            {text:"Dolce & Gabbana", correct: true},
            {text:"Designer & Garments", correct: false},
            {text:"Dog & Goose", correct: false},
            {text:"Dave & Gary", correct: false}
        ]
    },
    {
        question: "What does D&G stand For?",
        answers:[
            {text:"Dolce & Gabbana", correct: true},
            {text:"Designer & Garments", correct: false},
            {text:"Dog & Goose", correct: false},
            {text:"Dave & Gary", correct: false}
        ]
    },
]