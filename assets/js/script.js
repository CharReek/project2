// vars for the quiz
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionSection = document.getElementById("question-section");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-section");


// vars for the questions

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    setNextQuestion();
});

//quiz function 

function startGame(){
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionSection.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion(){
    resetGame();
    showQuestion(shuffledQuestions [currentQuestionIndex]);
}

function showQuestion(question){
    questionText.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetGame(){
    clearStatus(document.body);
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    document.body.style.backgroundColor = "white"
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatus(document.body, correct);
    Array.from(answerButtons.children).forEach(button => { 
        setStatus(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide");
        currentQuestionIndex++;
        
    } else {
        alert("congrats! You finished the quiz!");
    };
};

function setStatus (element, correct){
    if (correct){
        element.classList.add("correct");
        document.body.style.backgroundColor = "green"
    } else {
        element.classList.add("wrong");
        document.body.style.backgroundColor = "red"
    }
    clearStatus(element);
}

function clearStatus (element){
    element.classList.remove("correct");
    element.classList.remove("wrong");
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
            {text:"Christian Louboutin", correct: true},
            {text:"Prada", correct: false}
        ]
    },
    {
        question: "Who designed the iconic Jlo Green dress that she wore to the 42nd Grammys in 2000?",
        answers:[
            {text:"Moschino", correct: true},
            {text:"Valentino", correct: false},
            {text:"Dior", correct: false},
            {text:"Versace", correct: true}
        ]
    },
    {
        question: "Who made the LBD famous?",
        answers:[
            {text:"Givenchy", correct:false},
            {text:"Coco Chanel", correct: true},
            {text:"Dior", correct: false},
            {text:"Yves Saint Laurent", correct: false}
        ]
    },
    {
        question: "Which of these brands was founded in England??",
        answers:[
            {text:"Ganni", correct: false},
            {text:"Louis Vuitton", correct: false},
            {text:"Prada", correct: false},
            {text:"Burberry", correct: true}
        ]
    },
    {
        question: "What year did Alexander Mcqueen release the oversized sneaker?",
        answers:[
            {text:"2012", correct: false},
            {text:"2014", correct: true},
            {text:"2017", correct: false},
            {text:"2015", correct: false}
        ]
    },
    {
        question: "Where was the brand Ganni Founded?",
        answers:[
            {text:"Milan", correct: false},
            {text:"London", correct: false},
            {text:"Copenhagen", correct: true},
            {text:"Berlin", correct: false}
        ]
    },
    {
        question: "What year was Dior established?",
        answers:[
            {text:"1950", correct: false},
            {text:"1942", correct: false},
            {text:"1940", correct: false},
            {text:"1946", correct: true}
        ]
    },
    {
        question: "What brand is known for chunky trainers?",
        answers:[
            {text:"Balenciaga", correct: true},
            {text:"Gucci", correct: false},
            {text:"Dior", correct: false},
            {text:"Prada", correct: false}
        ]
    },
    {
        question: "What city is considered the fashion capital(2021)?",
        answers:[
            {text:"New York", correct: true},
            {text:"Milan", correct: false},
            {text:"Paris", correct: false},
            {text:"London", correct: false}
        ]
    },
]