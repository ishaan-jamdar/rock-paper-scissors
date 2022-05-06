function computerPlay() {
  const choice = Math.floor(Math.random() * 3 + 1);
  if (choice === 1) {
    return 'Rock';
  } else if (choice === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(player, cpu) {
  player = player.toLowerCase();
  cpu = cpu.toLowerCase();
  if (player === cpu) {
    return 'It\'s a tie!';
  } else if (player === 'rock') {
    if (cpu === 'paper') {
      return 'You Lose! Paper beats Rock';
    } else {
      return 'You Win! Rock beats Scissors';
    }
  } else if (player === 'paper') {
    if (cpu === 'scissors') {
      return 'You Lose! Scissors beats Paper'
    } else {
      return 'You Win! Paper beats Rock'
    }
  } else if (player === 'scissors') {
    if (cpu === 'rock') {
      return 'You Lose! Rock beats Scissors'
    } else {
      return 'You Win! Scissors beats Paper'
    }
  } else {
    return 'Invalid Input'
  }
}

function game() {
  let pScore = 0;
  let cScore = 0;
  for (let i = 0; i < 5; i++) {
    
  }
}
