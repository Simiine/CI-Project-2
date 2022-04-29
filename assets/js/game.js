// Constant Variables

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

/**
 * When player gets an answer correct how much it is worth
 */
const CORRECT_BONUS = 10;

/**
 * How many questions a user gets before they finish
 */
const MAX_QUESTIONS = 4;

// Let variables

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question: "Example of the first question",
        choice1: "Test Answer 1",
        choice2: "Test Answer 2",
        choice3: "Test Answer 3",
        choice4: "Test Answer 4",
        answer: 1
    },
    {
        question: "Example of the second question",
        choice1: "Test Answer 1",
        choice2: "Test Answer 2",
        choice3: "Test Answer 3",
        choice4: "Test Answer 4",
        answer: 3
    },
    {
        question: "example of the forth question",
        choice1: "Test Answer 1",
        choice2: "Test Answer 2",
        choice3: "Test Answer 3",
        choice4: "Test Answer 4",
        answer: 3
    },
    {
        question: "example of the fifth question",
        choice1: "Test Answer 1",
        choice2: "Test Answer 2",
        choice3: "Test Answer 3",
        choice4: "Test Answer 4",
        answer: 3
    },

];

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

// Select random questions from available
getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
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