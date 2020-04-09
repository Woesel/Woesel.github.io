/* Lucky Sevens Game
 * Roll dice
 * hit 7 = win $4
 * no 7 = lose $1
 */

/*GLOBAL VARIABLES*/
const WIN_AMOUNT = 4;
const LOSS_AMOUNT = 1;
var peakEarnAmount;
var peakEarnTurn;

/*GAMEPLAY FUNCTIONS*/
/** roll()
 * Roll 2 Dice
 * @returns {Number|Int} 2-12 
 */
function roll()
{
    var num1 = Math.floor(Math.random() * 6 + 1);
    var num2 = Math.floor(Math.random() * 6 + 1);
    var rollTotal = num1 + num2;

    return rollTotal;
}

/** biggestBank(nextEarn)
 * Set stats for highest earning for player
 * @param {Number|Float} nextEarn - total earnings every roll
 * @param {Number|Int} currentTurn - roll count 
 * @returns {void}
 */
function biggestBank(nextEarn, currentTurn)
{
    if (nextEarn > peakEarnAmount)
    {
        peakEarnAmount = nextEarn;
        peakEarnTurn = currentTurn;
    }
}

/*----------------------------------------------------------------------------*/
/** play()
 * Main gameplay loop
 * @returns {void}
 */
function play()
{
    /*STARTING BET DISPLAY*/
    var bet = Number(document.getElementById("buyin").value);
    if (bet < 0.01 || isNaN(bet))
    {
        alert("Please enter valid bet amount");
        return;
    }
    document.getElementById("buyinDisplay").innerText = "$" + bet;

    /*GAMEPLAY LOOP*/
    var bank = bet;
    var rollCt = 0;
    peakEarnAmount=0;
    peakEarnAmount=0;
    
    while (bank > 0)
    {
        //roll
        var round = roll();
        rollCt++;

        //w/l
        if (round === 7)
        {
            bank += WIN_AMOUNT;
        } else
        {
            bank -= LOSS_AMOUNT;
        }

//        console.log("roll #" + rollCt + ": " + round + " | bank: $" + bank); //debug

        biggestBank(bank, rollCt);
    }

    /*RESULTS SHOW*/
    document.getElementById("totalRolls").innerText = rollCt;
    document.getElementById("highestEarning").innerText = peakEarnAmount;
    document.getElementById("highestEarningRollCount").innerText = peakEarnTurn;
    
    document.getElementById("results").style.display = "block";
}