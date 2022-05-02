//Constant variables
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const highScoresList = document.getElementById('highScoresList');

//Displays high scores
highScoresList.innerHTML = 
    highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");
