// Constant Variables

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');

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
    getNewQuestion();
};

// Select random questions from available
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        //go to the end page once gone through all questions
        return window.location.assign("/end.html");
    }
    questionCounter++;

    // shows number of questions user is on out of total
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    // Lists choices from dataset
    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    //Remove the question just used so it won't repeat
    availableQuestion.splice(questionIndex, 1);

    // allow users to answer
    acceptingAnswers = true;
};

// Add event listener for clicking answer options
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        // show if selected answer is correct or incorrect
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

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