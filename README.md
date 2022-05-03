# Climate Quiz
Climate quiz is an interactive quiz game where players can test their climat and environmental knowledge. The game consists of 10 questions. If a player answer a question currectly they will receive 10 bonus points. Upon completing the game, the user can save their high score and later look back on the top high scores for the game. This game is not only fun for users to play but also allows users to learn important facts about climate change and the environment. 

![responsive design picture]()

# Target Audience 

# Design Choices
## Colour Pallette
https://coolors.co/d7263d-f46036-2e294e-1b998b-c5d86d
https://coolors.co/palette/d8f3dc-b7e4c7-95d5b2-74c69d-52b788-40916c-2d6a4f-1b4332-081c15
## Typography
## Wireframe
![wireframe picture]()

# Features
## Header
## Logo

# Testing
## Testing Method
## Responsive Design
![responsive design on mobile]()
![responsive design on medium screen]()

## Validator Testing
### HTML
![html checker warning picture]()
### CSS
![css validator picture]()
### Lighthouse
#### Desktop
![lighthouse desktop picture]()
#### Mobile
![lighthouse mobile picture]()

# Bugs
## Uncaught TypeError
There was an uncaught type error on the home page, which declared inner text as null. The reason this error was happening was because the item didn't exist in the index HTML page. In order to resolve this I would need to create a seperate Javascript for the home page or simply delete the Javascript source in the index page. As the home page didn't have any javascript functions, I chose to delete the javascript source link, which solved the issue.  

## Question repetition
There was an issue while going through the quiz with the same questions repeating themselves, rather than moving onto new questions. While I put in the correct code to stop questions repeating, the issue was still there. I discovered I had a simple spelling mistake in the code which quickly solved the issue, when corrected.

## Saving High Score
There was an issue when it came to saving the high scores, where instead of saving the most recent score it was saving a random number. This was a result of the wrong code being written. Once I corrected this code the game started saving the correct score instead of a random number. 

# Deployment

# Technology Used
- HTML
- CSS
- Javascript

# Credits

## Contents
- Font was sourced from Google Fonts https://fonts.google.com/

## Support
- - Richard Wells Code Institute Mentor.

## Tutorials
- Javascript Quiz Tutorial - https://www.youtube.com/watch?v=u98ROZjBWy8&t=7s

## Quiz Questions
- https://ig.ft.com/climate-change-quiz/
- https://www.washingtonpost.com/climate-solutions/interactive/2022/climate-change-quiz/
- https://www.energy.gov/maps/quiz-how-much-do-you-know-about-climate-change
- https://www.earthday.org/the-climate-change-quiz/ 
- https://www.earthday.org/plastic-pollution-quiz/

## Media
- Picture was taken from the open source site Unsplash https://unsplash.com/

## Code
- CSS glass effect used on game start page - https://css.glass/
/* From https://css.glass */
background: rgba(255, 255, 255, 0.71);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
border: 1px solid rgba(255, 255, 255, 0.04);