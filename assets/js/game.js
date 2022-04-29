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
const MAX_QUESTIONS = 3;

// Let variables

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question: "Test Question 1",
        choice1: "Test Answer 1",
        choice2: "Test Answer 2",
        choice3: "Test Answer 3",
        choice4: "Test Answer 4",
        answer: 1
    },
    {
        question: "Test Question 2",
        choice1: "Test Answer 1",
        choice2: "Test Answer 2",
        choice3: "Test Answer 3",
        choice4: "Test Answer 4",
        answer: 3
    },
    {
        question: "Test Question 3",
        choice1: "Test Answer 1",
        choice2: "Test Answer 2",
        choice3: "Test Answer 3",
        choice4: "Test Answer 4",
        answer: 3
    },
    {
        question: "Test Question 4",
        choice1: "Test Answer 1",
        choice2: "Test Answer 2",
        choice3: "Test Answer 3",
        choice4: "Test Answer 4",
        answer: 3
    },

];


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