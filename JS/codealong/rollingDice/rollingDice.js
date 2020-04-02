let numSides = prompt("How many sides does the die have?");

function rollDice(numSides){
		return Math.floor(Math.random() * numSides) + 1;
}
let times = prompt("How many times do you want to roll?");
for (let i=0;i<times;i++){
	console.log(rollDice(numSides));
}