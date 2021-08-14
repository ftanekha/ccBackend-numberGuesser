let humanScore = 0,
computerScore = 0,
currentRoundNumber = 1;

function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(targetNumber, computerGuess, humanGuess = 4){
    //If both players are tied, the human user should win
    if(humanGuess === computerGuess) return true;
    //determine which player (human or computer) is closest to the target number
    if(humanGuess > targetNumber) return humanGuess < computerGuess;
    if(humanGuess < targetNumber) return humanGuess > computerGuess;
}

function updateScore(winner){
    return winner === 'human' ? ++humanScore : ++computerScore;
}

function advanceRound(){
    return ++currentRoundNumber;
}

function playGame(){
    if(compareGuesses(generateTarget(), generateTarget())){
        updateScore('human');
    }else{
        updateScore('computer');
    }
    advanceRound();
}playGame(), playGame(), playGame(), playGame(), playGame();//currentRound is always 1 plus (humanScore + computerScore)

//test
//console.log(humanScore, computerScore, currentRoundNumber)

