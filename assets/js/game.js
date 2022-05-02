//Constant Variables
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");

//Points per score player gets
const CORRECT_BONUS = 10;

//Number of questions in the game
const MAX_QUESTIONS = 4;

//Let variables
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
        question: "What is the greenhouse effect?",
        choice1: "The measurement of plant growth in areas affected by flooding.",
        choice2: "The phenomenon in which gases in the Earth’s atmosphere prevent heat from escaping into space.",
        choice3: "When climate change affects ecosystems.",
        choice4: "The impact trees have on global temperatures.",
        answer: 2
    },
    {
        question: "What is the most potent greenhouse gas?",
        choice1: "Fluorinated gases",
        choice2: "Carbon dioxide",
        choice3: "Nitrous oxide",
        choice4: "Methane",
        answer: 1
    },
    {
        question: "How much have sea levels risen in the past 100 years?",
        choice1: "7 inches",
        choice2: "2 inches",
        choice3: "5 inches",
        choice4: "16 inches",
        answer: 1
    },
    {
        question: "Which of the following is the biggest cause of global warming?",
        choice1: "Decomposing plants",
        choice2: "Burning oil, gas and coal",
        choice3: "Natural variation of the planet",
        choice4: "Pollution from wildfires",
        answer: 2
    },
    {
        question: "Which of the following places has warmed the most, over the past 100 years?",
        choice1: "Marrakech, Morocco",
        choice2: "Vancouver, Canada",
        choice3: "Svalbard, Norway",
        choice4: "Basra, Iraq",
        answer: 3
    },
    {
        question: "Which country is the world’s largest emitter of carbon dioxide?",
        choice1: "United States",
        choice2: "China",
        choice3: "India",
        choice4: "Russia",
        answer: 2
    },

];

/**
 * Start Game function
 */
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

/**
 * Selects random questions from available list
 */
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        //Takes user to end page once all questions are answered
        return window.location.assign("/end.html");
    }

    questionCounter++;
    //Shows number of questions user is on
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Updates progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    
    //Updates question
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //Lists choices from dataset
    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    //Removes used question so there is no repetition
    availableQuestion.splice(questionIndex, 1);
    //Allow users to answer
    acceptingAnswers = true;
};

/**
 * Adds event listener for clicking answer options
 */
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        //Shows correct or incorrect answers using CSS styling
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        //Increments score for correct answers
        if(classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        //Adds delay before next question appears
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();


/**
 * Questions
 */

/**
 * Intro Screen
 */

/**
 * Loop through the questions and present with answers
 */

/**
 * Select Answers
 */

/**
 * Check if answer is correct
 */

/**
 * Handle score
 */

/**
 * keep looping
 */

/**
 * When no more questions
 * end game and present options
 */