//Roster Logic

function Roster() {
	this.players = []
  this.playerId = 0 
}

Roster.prototype.addPlayer = function(player) {
	player.id = (this.playerId += 1);
	this.players.push(player);
}
//Player Score Logic
function Player(name, rollScore, playScore, totalScore) {
	this.name = name,
	this.rollScore = rollScore,
	this.playScore = playScore,
	this.totalScore = totalScore

	
	this.playScore = 0;
	this.totalScore = 0;
}

Player.prototype.addToScore = function(player) {
	this.totalScore += this.playScore;
}

Player.prototype.addToPlayScore = function(rollScore) {
	console.log(this.playScore)
	this.playScore += rollScore;
	return this.playScore;
}


Player.prototype.addToTotalScore = function(playScore) {
 this.totalScore += playScore;
 return this.totalScore;
}
//Dice Roll Logic

function diceRoll() {
	var rollScore = Math.floor((Math.random() * 6) + 1);
	return rollScore;
};





var roster = new Roster();

//User Interface Logic

function showRoll(rollScore)	{
	$("#roll-dice-result").text(rollScore);
	$("#play-score").text(roster.players[0].playScore);

};

function showHold(totalScore) {
$("#game-score").text(roster.players[0].totalScore);
}


$("document").ready(function() {

	$("form#input-name").submit(function()	{
		event.preventDefault();
		var inputtedName = $("input#name").val();
		var player = new Player(inputtedName);
		console.log(player);
		roster.addPlayer(player);
	});
	
	$("form#roll").submit(function() {
		event.preventDefault();
		var rollScore = diceRoll();
		roster.players[0].addToPlayScore(rollScore);
		showRoll(rollScore);
		console.log(roster.players[0]);

	});

	$("form#hold").submit(function()	{
		event.preventDefault();
		var totalScore = roster.players[0].addToTotalScore(roster.players[0].playScore);
		showHold(totalScore);
		console.log(roster.players[0].playScore);
	})

});