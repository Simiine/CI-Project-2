const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const mostRecentScore = localStorage.getItem('mostRecentScore');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const username = document.getElementById('username');
const maxHighScore = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score)
    highScores.splice(maxHighScore);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};