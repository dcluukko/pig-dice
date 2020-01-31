//Roster Logic

function Roster() {
	this.players = [],
	this.playerId = 0, 
	this.currentPlayer = 0 
}

Roster.prototype.addPlayer = function(player) {
	player.id = (this.playerId += 1);
	this.players.push(player);
}

function switchPlayer()  {
	if (roster.currentPlayer === 0) {
		roster.currentPlayer = 1;
		return roster.players[1];
	} else if (roster.currentPlayer === 1) {
		roster.currentPlayer = 0;
		return roster.players[0];
	} else {
	}
};




//Player Score Logic
function Player(name, rollScore, playScore, totalScore) {
	this.name = name,
	this.rollScore = rollScore,
	this.playScore = playScore,
	this.totalScore = totalScore

	this.rollScore = 0;
	this.playScore = 0;
	this.totalScore = 0;
}

Player.prototype.addToScore = function(player) {
	this.totalScore += this.playScore;
}

Player.prototype.addToPlayScore = function(player) {
	if (this.rollScore === 1) {
		return this.playScore = 0;
	} else {
		this.playScore += this.rollScore;
		return this.playScore;
	}
}

Player.prototype.addDiceRoll = function() {
	var rollScore = diceRoll();
	this.rollScore = rollScore;
};

Player.prototype.addToTotalScore = function(playScore) {
 this.totalScore += playScore;
 this.rollScore = 0;
 this.playScore = 0;
 return this.totalScore;
}

Player.prototype.youWon = function() {
	if (this.totalScore >= 100) {
		alert("you win");
	}
}
//Dice Roll Logic

function diceRoll() {
	var rollScore = Math.floor((Math.random() * 6) + 1);
		return rollScore;
};






var roster = new Roster();

//User Interface Logic

function showRoll()	{
	$("#roll-dice-result").text(roster.players[roster.currentPlayer].rollScore);
	$("#play-score").text(roster.players[roster.currentPlayer].playScore);
// 				if (rollDice === 0) {
// 					$("roll-dice-result").text();
// 				}
};

function showHold(totalScore) {
$("#player-one-total-score").text(roster.players[0].totalScore);
$("#player-two-total-score").text(roster.players[1].totalScore);
}


$("document").ready(function() {

	$("form#input-name").submit(function()	{
		event.preventDefault();
		var playerOneName = $("input#player-one-name").val();
		var playerTwoName = $("input#player-two-name").val();
		$("#player-one-name-scoreboard").text(playerOneName);
		$("#player-two-name-scoreboard").text(playerTwoName);
		var playerOne = new Player(playerOneName);
		var playerTwo = new Player(playerTwoName);
		roster.addPlayer(playerOne);
		roster.addPlayer(playerTwo);

		$(".name-input-form").hide();	
		$(".scoreboard").show();
	});

	$("form#roll").submit(function() {
		event.preventDefault();
		roster.players[roster.currentPlayer].addDiceRoll();
		roster.players[roster.currentPlayer].addToPlayScore(roster.players[roster.currentPlayer]);
		showRoll(roster.players[roster.currentPlayer].rollScore);
		roster.players[roster.currentPlayer].youWon(roster.players[roster.currentPlayer]);
	});

	$("form#hold").submit(function()	{
		event.preventDefault();
		var totalScore = roster.players[roster.currentPlayer].addToTotalScore(roster.players[roster.currentPlayer].playScore);
		showHold(totalScore);
		switchPlayer();
		showRoll();
	})
});