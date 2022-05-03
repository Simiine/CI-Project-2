//Constant Variables
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarFull = document.getElementById("progressBarFull");
const progressText = document.getElementById('progressText');
const question = document.getElementById("question");
const scoreText = document.getElementById('score');
const correctBonus = 10;
const maxQuestions = 10;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

/**
 * Game Questions
 */
let questions = [
    {
        question: "What percentage of the earth’s atmosphere is comprised of carbon dioxide?",
        choice1: "0.04",
        choice2: "1.04",
        choice3: "4.04",
        choice4: "5.04",
        answer: '1'
    },
    {
        question: "What is the most potent greenhouse gas?",
        choice1: "Fluorinated gases",
        choice2: "Carbon dioxide",
        choice3: "Nitrous oxide",
        choice4: "Methane",
        answer: '1'
    },
    {
        question: "How much have sea levels risen in the past 100 years?",
        choice1: "7 inches",
        choice2: "2 inches",
        choice3: "5 inches",
        choice4: "16 inches",
        answer: '1'
    },
    {
        question: "Which of the following is the biggest cause of global warming?",
        choice1: "Decomposing plants",
        choice2: "Burning oil, gas and coal",
        choice3: "Natural variation of the planet",
        choice4: "Pollution from wildfires",
        answer: '2'
    },
    {
        question: "Which of the following places has warmed the most, over the past 100 years?",
        choice1: "Marrakech, Morocco",
        choice2: "Vancouver, Canada",
        choice3: "Svalbard, Norway",
        choice4: "Basra, Iraq",
        answer: '3'
    },
    {
        question: "Which country is the world’s largest emitter of carbon dioxide?",
        choice1: "United States",
        choice2: "China",
        choice3: "India",
        choice4: "Russia",
        answer: '2'
    },
    {
        question: "What is the world’s simplest molecule and a potential source of clean energy?",
        choice1: "Hydrogen",
        choice2: "Methane",
        choice3: "Ammonia",
        choice4: "Lithium",
        answer: '1'
    },
    {
        question: "Which five-year period was the warmest on record?",
        choice1: "2001 - 2005",
        choice2: "2006 - 2010",
        choice3: "2011 - 2015",
        choice4: "2016 - 2020",
        answer: '4'
    },
    {
        question: "Globally, which of the following sectors emits the largest % of greenhouse gas emisions?",
        choice1: "Transportation",
        choice2: "Buildings",
        choice3: "Industry",
        choice4: "Electricity and heat production",
        answer: '4'
    },
    {
        question: "How many million tons of plastic are dumped in our oceans every year?",
        choice1: "1 million tons",
        choice2: "8 million tons",
        choice3: "20 million tons",
        choice4: "50 million tons",
        answer: '2'
    },
];

/**
 * Start Game function
 */
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

/**
 * Selects random questions from available list
 */
function getNewQuestion() {
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    if (availableQuestions.length === 0 || questionCounter >= maxQuestions){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("/end.html");
    }

    questionCounter++;

    progressText.innerText = `Question ${questionCounter}/${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;
    
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

/**
 * Adds event listener for clicking answer options
 */
choices.forEach(choice => {
    choice.addEventListener('click', (event) => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        //Shows correct or incorrect answers using CSS styling
        const classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';

        //Increments score for correct answers
        if(classToApply === 'correct') {
            incrementScore(correctBonus);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        //Adds delay before next question appears
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

/**
 * Increments the score
 * @param {number} num - bonus to be applied to the score
 */
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
};

startGame();