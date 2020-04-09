function rollDice() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  return dice1 + dice2;
}

function playGame() {

  let startingBet = Number(document.getElementById("startBet").value);
  let rollCount = 0;
  let maxAmount = 0;
  let gameMoney = startingBet;
  let totalRolls = 0;

  if (startingBet < 1) {
      alert("Please enter a bet amount.");
      document.getElementById("winloss").style.display = "none";
      return;
  } else {
    for (totalRolls= 0; gameMoney > 0; totalRolls++) {
      let totalDice = rollDice();
      if (totalDice == 7) {
        gameMoney += 4
      } else {
        gameMoney--;
      }
      if (gameMoney > maxAmount) {
        maxAmount = gameMoney;
        rollCount = totalRolls;
      }
    }
  }

    document.getElementById("firstBet").innerText = "$" + startingBet;
    document.getElementById("rollsLeft").innerText = totalRolls;
    document.getElementById("amtWon").innerText = "$" + maxAmount;
    document.getElementById("maxRoll").innerText = rollCount;
    document.getElementById("winloss").style.display = "block";
  }
