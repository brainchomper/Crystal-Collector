// Global Variables
var crystalVal1, crystalVal2, crystalVal3, crystalVal4;
var wins = 0;
var loses = 0;
var randComputer;
// counts user score
var usrScore;

//Functions

function startGame ()
//randome number between 25 & 80
randComputer = 25 + Math.floor(Math.random() * 55);
ran
crystalVal1 = 1 + Math.floor(Math.random() * 10);
crystalVAl2 = 1 + Math.floor(Math.random() * 10);
crystalVal3 = 1 + Math.floor(Math.random() * 10);
crystalVal4 = 1 + Math.floor(Math.random() * 10);
usrScore = 0;



// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.

//The player wins if their total score matches the random number from the beginning of the game.

//The player loses if their score goes above the random number.

//The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.