//Roster Logic

function Roster() {
	this.players = [],
  this.playerId = 0 
}

Roster.prototype.addPlayer = function(player) {
	player.id = (this.playerId += 1);
	this.players.push(player);
}

Player.prototype.checkPlayerID = function()	{
	return (this.id === 1 ? true : false )
;}

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
	console.log(player);
	if (this.rollScore === 0) {
		return this.playScore = 0;
	} else {
		this.playScore += this.rollScore;
		return this.playScore;
	}
}


Player.prototype.addToTotalScore = function(playScore) {
 this.totalScore += playScore;
 return this.totalScore;
}
//Dice Roll Logic

function diceRoll() {
	var rollScore = Math.floor((Math.random() * 6) + 1);
		if (rollScore === 1) {
			return rollScore = 0;
		} 
		console.log(rollScore);
		return rollScore;
};






var roster = new Roster();

//User Interface Logic

function showRoll(rollScore)	{
	$("#roll-dice-result").text(rollScore);
	$("#play-score").text(roster.players[0].playScore);

};

function showHold(totalScore) {
$("#player-one-total-score").text(roster.players[0].totalScore);
}


$("document").ready(function() {

	$("form#input-name").submit(function()	{
		event.preventDefault();
		var playerOneName = $("input#player-one-name").val();
		var playerTwoName = $("input#player-two-name").val();
		var playerOne = new Player(playerOneName);
		var playerTwo = new Player(playerTwoName);
		roster.addPlayer(playerOne);
		roster.addPlayer(playerTwo);
		var currentPlayer = roster.players[1];
		console.log(currentPlayer);
		var whatisthis = currentPlayer.checkPlayerID();
	
		
	});
	
	$("form#roll").submit(function() {
		event.preventDefault();
		var rollScore = diceRoll();
		showRoll(rollScore);
		roster.players[0].addToPlayScore(roster.players[0]);
		
	});

	$("form#hold").submit(function()	{
		event.preventDefault();
		var totalScore = roster.players[0].addToTotalScore(roster.players[0].playScore);
		currentPlayer = player.checkPlayerID();
		showHold(totalScore);
		// console.log(roster.players[0].playScore);
	})

});