//Constant Variables
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const mostRecentScore = localStorage.getItem('mostRecentScore');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const username = document.getElementById('username');
const MAX_HIGH_SCORE = 5;

finalScore.innerText = mostRecentScore;

//Disables save score button if no username inserted
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (event) => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    //Pushes high score into an array
    highScores.push(score);
    //Sorts high score in order from highest to lowest
    highScores.sort( (a,b) => b.score - a.score)
    //Shows top 5 high scores
    highScores.splice(MAX_HIGH_SCORE);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};