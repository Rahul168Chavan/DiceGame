var currentScores, finalScores, activePlayer
finalScores = [0, 0, 0, 0]
currentScores = 0
activePlayer = 0
var gamePoint = 0
var questionNumber = 0
var Team0 = "1"
var Team1 = "2"
var Team2 = "3"
var Team3 = "4"
var correctAnswer = false;
var givenanswers = ""
var answers = [
  "Sekhar",
  "Saaho",
  "Madhupriya",
  "Sachin",
  "F2",
  "10",
  "Manam",
  "Arundhati",
  "Poorna",
  "Hushaaru",
  "Serbia",
  "7",
  "Shakuntala Devi",
  "France",
  "England",
  "2011",
  "Jordan and Israel",
  "French",
  "Atlantic",
  "Japan",
  "Thailand",
  "Africa",
  "Brazil",
  "Raja Harishchandra",
  "Harivansh Rai Bachchan",
  "Milkha singh",
]
// var correctAnwsers = answers.join()
var questions = [
  "Who is the directory of Fidaa Movie",
  "Recently released movie of Prabhas",
  'singer who sang the song "Vachinde pilla" in the movie FIDA?',
  "Who is know as father of cricket",
  "movie name in which tammana and venkatesh worked together ",
  "what is the jersey number of Messi",
  "movie name in which Rashi Khanna, Nagarjuna and samantha worked together",
  "movie name in which sonu sood and Anushka worked together",
  "name of nagachaitanya in Majili movie",
  '"undiporaadhey" is the song from which movie',
  "Novak Djokovic a teenis player plays for which country",
  "Cristiano Ronaldo jersey number",
  "first Indian women calculator",
  "Which country won the FIFA World Cup in 2018?",
  "Who won the ICC world cup in 2019",
  "In which year India won the ICC world cup under MSD captaincy",
  "Dead Sea is located in between which country",
  "who gifted Statue of Liberty to USA",
  "In Which ocean Bermuda Triangle is located",
  "which country is also know as 'Land Of Rising Sun'",
  "In which country white elephant is found",
  "Which continet has the highest number of countires",
  "which country is largest producer of coffee in the world",
  "name of first Indian feature film",
  "father of Amitabh bachchan",
  "Flying sikh of India",
]
function setDice() {
  for (i = 1; i <= 4; i++) {
    document.querySelector("#dice-" + i).style.display = "none"
    document.querySelector("#current-" + (i - 1)).textContent = 0
    document.querySelector("#score-" + (i - 1)).textContent = 0
  }
}
setDice()
gamePoint = prompt("pleaes enter the gamePoint")
document.querySelector(".btn-roll").addEventListener("click", function () {
  var dice = Math.floor(Math.random() * 6 + 1)
  currentScores = currentScores + dice
  document.querySelector("#dice-" + (activePlayer + 1)).style.display = "block"
  document.querySelector("#dice-" + (activePlayer + 1)).src =
    "dice-" + dice + ".png"
  document.querySelector("#current-" + activePlayer).textContent = currentScores
  var totalScor = document.querySelector("#score-" + activePlayer).textContent
  if (parseInt(totalScor) + currentScores > (gamePoint || 50)) {
    alert("Conguralation your a Winner for this Match")
    document.querySelector("#score-" + activePlayer).textContent =
      parseInt(totalScor) + currentScores
    setDice()
    activePlayer = 0
    currentScores = 0
  }
  if (dice === 1) {
    if (activePlayer === 3) {
      activePlayer = 0
      currentScores = 0
    } else {
      activePlayer++
      currentScores = 0
    }
  }
  document.querySelector("#current-" + activePlayer).textContent = currentScores
})
Team0 = prompt("Enter the first team name")
document.querySelector("#name-0").textContent = Team0
Team1 = prompt("Enter the second team name")
document.querySelector("#name-1").textContent = Team1
Team2 = prompt("Enter the third team name")
document.querySelector("#name-2").textContent = Team2
Team3 = prompt("Enter the Fourth team name")
document.querySelector("#name-3").textContent = Team3
document.querySelector(".btn-hold").addEventListener("click", function () {
	questionNumber = Math.floor(Math.random() * 25)
  givenanswers = prompt(questions[questionNumber])
  correctAnswer = givenanswers.toLowerCase() == answers[questionNumber].toLowerCase();
  // questions.splice(questionNumber,1);
  dice = 1
  if(correctAnswer) {
    var totalScore = document.querySelector("#score-" + activePlayer)
      .textContent
    document.querySelector("#score-" + activePlayer).textContent =
      parseInt(totalScore) + currentScores
       }
    if(activePlayer !== 3)
  	{
    activePlayer++
    currentScores = 0
  }
   else if (activePlayer === 3) {
    // var totalScore = document.querySelector("#score-" + activePlayer)
    //   .textContent
    // document.querySelector("#score-" + activePlayer).textContent =
    //   parseInt(totalScore) + currentScores
    activePlayer = 0
    currentScores = 0
  }
  
})
document.querySelector(".btn-new").addEventListener("click", function () {
  setDice()
  activePlayer = 0
  currentScores = 0
  gamePoint = prompt("pleaes enter the gamePoint")
})
